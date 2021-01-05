"use strict";

// Split array into subarrays of max size n
// Usage: someArray.grouped(n)
Object.defineProperty(Array.prototype, 'grouped', {
    value: function(n) {
        return Array.from(Array(Math.ceil(this.length/n)), (_, i) => this.slice(i*n, i*n+n));
    }
});

const Discord = require("discord.js");
const CpDistributions = require("../cpcalculator/CpDistributions").default;

const TRIALS_BY_ABBREVIATION = {
    "aa": "Aetherian Archive",
    "as": "Asylum Sanctorium",
    "brp": "Blackrose Prison",
    "cr": "Cloudrest",
    "dsa": "Dragonstar Arena",
    "hof": "Halls of Fabrication",
    "hrc": "Hel Ra Citadel",
    "ka": "Kyne's Aegis",
    "ma": "Maelstrom Arena",
    "mol": "Maw of Lorkhaj",
    "so": "Sanctum Ophidia",
    "ss": "Sunspire",
    "vh": "Vateshran Hollows"
}

const ABILITIES = [
    "Ironclad",
    "Medium Armor Focus",
    "Spell Shield",
    "Elemental Defender",
    "Hardy",
    "Light Armor Focus",
    "Thick Skinned",
    "Heavy Armor Focus",
    "Quick Recovery",
    "Bashing Focus",
    "Sprinter",
    "Warlord",
    "Arcanist",
    "Mooncalf",
    "Tenacity",
    "Shadow Ward",
    "Tumbling"
]

class CP {
    constructor() {
        this._command = "cp";
    }

    help() {
        return "DMs Red And Green CP Builds Distributed Based On Your CP Level";
    }

    isThisCommand(command) {
        return command === this._command;
    }

    runCommand(args, msgObject, client) {
        const trial = this.normalizeTrialAbbreviation(args[0] || "");
        const cpInput = parseInt(args[1]) || 810;
        const cpLevel = Math.min(Math.max(cpInput, 0), 810); // Constrain CP between 0 and 810.

        if (!trial) {
            const invalidInputResponse = new Discord.RichEmbed()
                .setTitle("Invalid Trial")
                .setDescription("Please retype the command, followed by the abbreviation of the trial or arena you want CP builds for, and optionally your current CP level")
                .setColor("FFFF00")
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTimestamp()
                .addField("Example", "`.cp KA`, `.cp KA 600`")
                .addField("Trial Abbreviations", `
                    AA - Aetherian Archive
                    AS - Asylum Sanctorium
                    BRP - Blackrose Prison
                    CR - Cloudrest
                    DSA - Dragonstar Arena
                    HOF - Halls of Fabrication
                    HRC - Hel Ra Citadel
                    KA - Kyne's Aegis
                    MA - Maelstrom Arena
                    MOL - Maw of Lorkhaj
                    SO - Sanctum Ophidia
                    SS - Sunspire
                    VH - Vateshran Hollows
                `);
            msgObject.author.send(invalidInputResponse)
                .catch(console.error);
        } else {
            const cpBuilds = CpDistributions[trial];
            const cpResponse = new Discord.RichEmbed()
                .setTitle(`${TRIALS_BY_ABBREVIATION[trial]} - CP${cpLevel}`)
                .setColor("FFFF00")
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTimestamp();

            // Discord allows up to 3 inline fields in a RichEmbed before wrapping to the next line, so we display CP in a table with up to 3 columns
            // The first column contains CP ability names, while the second and optional third columns contain CP distributions for up to 2 roles
            for (const groupedBuilds of cpBuilds.grouped(2)) {
                const build1 = groupedBuilds[0];
                const build2 = groupedBuilds[1];
                const cpDistribution1 = build1.calculateCp(cpLevel);
                const cpDistribution2 = build2 ? build2.calculateCp(cpLevel) : {}; // Depending on how many builds are defined for a trial, build2 may not exist

                // Only list abilities that are present in at least one calculated CP distribution to avoid including rows of zeroes in the table
                const abilitiesInBuilds = Object.keys({...cpDistribution1, ...cpDistribution2});
                const abilitiesToDisplay = ABILITIES.filter(ability => abilitiesInBuilds.includes(ability));
                
                cpResponse
                    .addField('Ability', abilitiesToDisplay.join("\n"), true)
                    .addField(build1.name, this.formatCp(cpDistribution1, abilitiesToDisplay), true);
                if (build2) {
                    cpResponse.addField(build2.name, this.formatCp(cpDistribution2, abilitiesToDisplay), true);
                }

                cpResponse.addBlankField();
            }
            msgObject.author.send(cpResponse)
                .catch(console.error);
        }

        msgObject.delete()
            .catch(console.error);
    }

    normalizeTrialAbbreviation(trial) {
        switch (trial.toLowerCase()) {
            case "aa":
            case "naa":
            case "vaa":
                return "aa";
            case "as":
            case "nas":
            case "vas":
                return "as";
            case "brp":
            case "nbrp":
            case "vbrp":
                return "brp";
            case "cr":
            case "ncr":
            case "vcr":
                return "cr";
            case "dsa":
            case "ndsa":
            case "vdsa":
                return "dsa";
            case "hof":
            case "nhof":
            case "vhof":
                return "hof";
            case "hrc":
            case "nhrc":
            case "vhrc":
                return "hrc";
            case "ka":
            case "nka":
            case "vka":
                return "ka";
            case "ma":
            case "nma":
            case "vma":
                return "ma";
            case "mol":
            case "nmol":
            case "vmol":
                return "mol";
            case "so":
            case "nso":
            case "vso":
                return "so";
            case "ss":
            case "nss":
            case "vss":
                return "ss";
            case "vh":
            case "nvh":
            case "vvh":
                return "vh";
            default:
                return null;
        }
    }

    formatCp(cpBuild, abilities) {
        return abilities.map(ability => cpBuild[ability] || 0).join("\n");
    }
}

exports.default = CP;