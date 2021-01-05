"use strict";

class CpTree {
    constructor(abilities, priorityAbilityKeys) {
        this.abilities = abilities;
        this.priorityAbilityKeys = priorityAbilityKeys;
    }

    getCpRequired() {
        return Object.values(this.abilities)
            .reduce((acc, cpValue) => acc + cpValue, 0);
    }

    getCpRequiredForPriorityAbilities() {
        return Object.values(this.getPriorityAbilities())
            .reduce((acc, cpValue) => acc + cpValue, 0);
    }

    getCpRequiredForNonPriorityAbilities() {
        return Object.values(this.getNonPriorityAbilities())
            .reduce((acc, cpValue) => acc + cpValue, 0);
    }

    getPriorityAbilities() {
        return Object.fromEntries(
            Object.entries(this.abilities)
                .filter(([ability, _]) => this.priorityAbilityKeys.includes(ability)));
    }

    getNonPriorityAbilities() {
        return Object.fromEntries(
            Object.entries(this.abilities)
                .filter(([ability, _]) => !this.priorityAbilityKeys.includes(ability)));
    }
}

exports.default = CpTree;