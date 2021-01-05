"use strict";

const CpAbilities = require("./CpAbilities").default;

class CpBuild {
    constructor(name, redCp, greenCp) {
        this.name = name;
        this.redCp = redCp;
        this.greenCp = greenCp;
    }

    calculateCp(currentCp) {
        const redCp = this.calculateRedCp(currentCp);
        const greenCp = this.calculateGreenCp(currentCp);
        return {
            ...redCp,
            ...greenCp
        };
    }

    calculateRedCp(currentCp) {
        const redCpAvailable = this.calculateRedCpAvailable(currentCp);
        return this.calculateCpForTree(this.redCp, redCpAvailable);
    }

    calculateGreenCp(currentCp) {
        const greenCpAvailable = this.calculateGreenCpAvailable(currentCp);
        return this.calculateCpForTree(this.greenCp, greenCpAvailable);
    }

    calculateRedCpAvailable(currentCp) {
        if (currentCp % 3 > 0) {
            return Math.floor(currentCp / 3) + 1;
        } else {
            return Math.floor(currentCp / 3);
        }
    }

    calculateGreenCpAvailable(currentCp) {
        if (currentCp % 3 === 2) {
            return Math.floor(currentCp / 3) + 1;
        } else {
            return Math.floor(currentCp / 3);
        }
    }

    calculateCpForTree(tree, availableCp) {
        let cpInBuild = tree.getCpRequired();
        availableCp = Math.min(availableCp, cpInBuild);

        // Some abilities should be prioritized (Arcanist for healers and mag DPS, Mooncalf for stam DPS)
        // To support this, we first compute a CP distribution for a build consisting of just prioritized abilities
        // After that, we compute a CP distribution for the remaining abilities, then return the merged results
        const cpForPriorityAbilities = this.calculateCpForAbilities(tree.getPriorityAbilities(), tree.getCpRequiredForPriorityAbilities(), availableCp);
        const cpSpent = Object.values(cpForPriorityAbilities)
            .reduce((acc, cpValue) => acc + cpValue, 0);
        const cpForNonPriorityAbilities = this.calculateCpForAbilities(tree.getNonPriorityAbilities(), tree.getCpRequiredForNonPriorityAbilities(), availableCp - cpSpent);
        return {
            ...cpForPriorityAbilities,
            ...cpForNonPriorityAbilities
        };
    }

    calculateCpForAbilities(abilities, cpInBuild, availableCp) {
        const calculatedCp = {};
        const jumpPointIndexes = {};

        // Initialize calculatedCp and jumpPointIndexes with values in CP810 build
        for (const ability in abilities) {
            const abilityCp = abilities[ability];
            // Only include abilities that are in the build
            if (abilityCp > 0) {
                calculatedCp[ability] = abilityCp;
                jumpPointIndexes[ability] = this.getIndexOfJumpPoint(this.getJumpPoints(ability), abilityCp);
            }
        }

        // Iterate through each ability in the build, deducting a jump point each time until we're at or below the available cp count
        while (cpInBuild > availableCp) {
            for (const ability in calculatedCp) {
                const previousJumpPointIndex = Math.max(jumpPointIndexes[ability] - 1, 0) // Clamp jump point index to 0 if already at 0
                let previousJumpPoint = 0;
                if (previousJumpPointIndex > 0) {
                    previousJumpPoint = this.getJumpPoints(ability)[previousJumpPointIndex];
                }

                const cpSpent = calculatedCp[ability];
                const diff = cpSpent - previousJumpPoint;
                calculatedCp[ability] = previousJumpPoint;
                jumpPointIndexes[ability] = previousJumpPointIndex;
                cpInBuild -= diff;
            }
        }

        // As each iteration of the previous loop deducted a jump point from each ability in the build, it is possible to have deducted more
        // points than required, so reallocate any available points in one or more forward passes
        while (cpInBuild < availableCp) {
            let spentPointsThisIteration = false;

            for (const ability in calculatedCp) {
                const jumpPoints = this.getJumpPoints(ability);
                const nextJumpPointIndex = Math.min(jumpPointIndexes[ability] + 1, jumpPoints.length - 1); // Clamp jump point index to max index
                const nextJumpPoint = jumpPoints[nextJumpPointIndex];
                const cpSpent = calculatedCp[ability];
                const diff = nextJumpPoint - cpSpent;

                if (nextJumpPoint <= abilities[ability] && cpInBuild + diff <= availableCp) {
                    calculatedCp[ability] = nextJumpPoint;
                    jumpPointIndexes[ability] = nextJumpPointIndex;
                    cpInBuild += diff;
                    spentPointsThisIteration = true;
                }
            }

            // We still have CP available but do not have enough to reach another jump point, so terminate the loop
            if (!spentPointsThisIteration) {
                break;
            }
        }

        // If we still have CP available as well as abilities with no jump points, allocate the remaining CP to those skills, ignoring artificial jump points
        while (cpInBuild < availableCp) {
            let spentPointsThisIteration = false;

            for (const ability in calculatedCp) {
                const cpSpent = calculatedCp[ability];
                if (cpSpent < abilities[ability] && CpAbilities[ability].jumpPoints === null) {
                    calculatedCp[ability] = calculatedCp[ability] + 1;
                    cpInBuild += 1;
                    spentPointsThisIteration = true;

                    if (cpInBuild === availableCp) {
                        break;
                    }
                }
            }

            // We have no more abilities with no jump points to allocate remaining points to, so terminate the loop
            if (!spentPointsThisIteration) {
                break;
            }
        }

        // Filter out abilities that have had their point allocations reduced to 0
        return Object.fromEntries(
            Object.entries(calculatedCp).filter(([_, cpValue]) => cpValue > 0));
    }

    getJumpPoints(ability) {
        return CpAbilities[ability].jumpPoints || CpAbilities[ability].artificialJumpPoints;
    }

    getIndexOfJumpPoint(jumpPoints, cp) {
        let index = jumpPoints.findIndex(jumpPoint => jumpPoint === cp);
        if (index > -1) {
            return index;
        } else {
            // CP is between jump points, so return the previous jump point index
            return jumpPoints.findIndex(jumpPoint => jumpPoint > cp) - 1;
        }
    }
}

exports.default = CpBuild;