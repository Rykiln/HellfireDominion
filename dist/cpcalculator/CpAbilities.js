"use strict";

class CpAbility {
    constructor(jumpPoints, artificialJumpPoints) {
        this.jumpPoints = jumpPoints;
        this.artificialJumpPoints = artificialJumpPoints;
    }
}

const JUMP_POINTS = {
    // For abilities with no jump points, use artificial jumps every 4 points to coerce them 
    // to scale more evenly compared to abilities with jump points
    NON_PERCENTAGE_JUMP_POINTS: Array.from({length: 25}, (_, i) => i * 4),
    FIFTEEN_PERCENT_JUMP_POINTS: [4, 7, 11, 15, 19, 23, 27, 32, 37, 43, 49, 56, 64, 75, 100],
    TWENTY_FIVE_PERCENT_JUMP_POINTS: [3, 5, 7, 9, 11, 13, 16, 18, 20, 23, 26, 28, 31, 34, 37, 40, 44, 48, 52, 56, 61, 66, 73, 81, 100],
    THIRTY_FIVE_PERCENT_JUMP_POINTS: [2, 3, 5, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 42, 44, 47, 50, 53, 56, 59, 63, 67, 72, 77, 84, 100]
};

exports.default = {
    // Red CP
    "Medium Armor Focus": new CpAbility(null, JUMP_POINTS.NON_PERCENTAGE_JUMP_POINTS),
    "Ironclad": new CpAbility(JUMP_POINTS.TWENTY_FIVE_PERCENT_JUMP_POINTS, null),
    "Spell Shield": new CpAbility(null, JUMP_POINTS.NON_PERCENTAGE_JUMP_POINTS),
    "Resistant": new CpAbility(null, JUMP_POINTS.NON_PERCENTAGE_JUMP_POINTS),
    "Light Armor Focus": new CpAbility(null, JUMP_POINTS.NON_PERCENTAGE_JUMP_POINTS),
    "Thick Skinned": new CpAbility(JUMP_POINTS.TWENTY_FIVE_PERCENT_JUMP_POINTS, null),
    "Hardy": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Elemental Defender": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Heavy Armor Focus": new CpAbility(null, JUMP_POINTS.NON_PERCENTAGE_JUMP_POINTS),
    "Bastion": new CpAbility(JUMP_POINTS.TWENTY_FIVE_PERCENT_JUMP_POINTS, null),
    "Expert Defender": new CpAbility(JUMP_POINTS.THIRTY_FIVE_PERCENT_JUMP_POINTS, null),
    "Quick Recovery": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),

    // Green CP
    "Bashing Focus": new CpAbility(null, JUMP_POINTS.THIRTY_FIVE_PERCENT_JUMP_POINTS),
    "Sprinter": new CpAbility(null, JUMP_POINTS.THIRTY_FIVE_PERCENT_JUMP_POINTS),
    "Siphoner": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Warlord": new CpAbility(null, JUMP_POINTS.TWENTY_FIVE_PERCENT_JUMP_POINTS),
    "Mooncalf": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Arcanist": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Healthy": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Tenacity": new CpAbility(JUMP_POINTS.FIFTEEN_PERCENT_JUMP_POINTS, null),
    "Befoul": new CpAbility(JUMP_POINTS.THIRTY_FIVE_PERCENT_JUMP_POINTS, null),
    "Shade": new CpAbility(null, JUMP_POINTS.THIRTY_FIVE_PERCENT_JUMP_POINTS),
    "Shadow Ward": new CpAbility(null, JUMP_POINTS.TWENTY_FIVE_PERCENT_JUMP_POINTS),
    "Tumbling": new CpAbility(null, JUMP_POINTS.TWENTY_FIVE_PERCENT_JUMP_POINTS)
};