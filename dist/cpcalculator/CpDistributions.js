"use strict";

const CpBuild = require("./CpBuild").default;
const CpTree = require("./CpTree").default;

exports.default = {
    "aa": [
        new CpBuild(
            "Tank", 
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 11
            }, []),
            new CpTree({
                "Sprinter": 3,
                "Warlord": 72,
                "Arcanist": 43,
                "Tenacity": 43,
                "Shadow Ward": 72,
                "Tumbling": 37
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 64,
                "Elemental Defender": 64,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 37,
                "Warlord": 56,
                "Arcanist": 64,
                "Tenacity": 32,
                "Shadow Ward": 81
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 64,
                "Elemental Defender": 64,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 37,
                "Warlord": 56,
                "Arcanist": 64,
                "Tenacity": 32,
                "Shadow Ward": 81
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 64,
                "Elemental Defender": 64,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 37,
                "Warlord": 56,
                "Mooncalf": 64,
                "Tenacity": 32,
                "Shadow Ward": 81
            }, ["Mooncalf"])
        )
    ],
    "as": [
        new CpBuild(
            "Main Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 52,
                "Heavy Armor Focus": 17
            }, []),
            new CpTree({
                "Sprinter": 19,
                "Arcanist": 64,
                "Tenacity": 64,
                "Shadow Ward": 72,
                "Tumbling": 51
            }, [])
        ),
        new CpBuild(
            "Off Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 64,
                "Hardy": 37,
                "Thick Skinned": 44,
                "Heavy Armor Focus": 1,
                "Quick Recovery": 43
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 23,
                "Arcanist": 43,
                "Tenacity": 43,
                "Shadow Ward": 81,
                "Tumbling": 52
            }, [])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 81,
                "Elemental Defender": 64,
                "Thick Skinned": 44
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 23,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 72,
                "Tumbling": 40
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 81,
                "Elemental Defender": 64,
                "Thick Skinned": 44
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 23,
                "Mooncalf": 64,
                "Tenacity": 43,
                "Shadow Ward": 72,
                "Tumbling": 40
            }, ["Mooncalf"])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 27,
                "Elemental Defender": 64,
                "Hardy": 37,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 35,
                "Arcanist": 64,
                "Tenacity": 64,
                "Shadow Ward": 41,
                "Tumbling": 66
            }, ["Arcanist"])
        )
    ],
    "brp": [
        new CpBuild(
            "Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 66,
                "Quick Recovery": 11
            }, []),
            new CpTree({
                "Bashing Focus": 16,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 16,
                "Shadow Ward": 72,
                "Tumbling": 51
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 16,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Light Armor Focus": 8,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Bashing Focus": 16,
                "Warlord": 56,
                "Arcanist": 64,
                "Tenacity": 37,
                "Shadow Ward": 46,
                "Tumbling": 51
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 16,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Light Armor Focus": 8,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Bashing Focus": 16,
                "Warlord": 56,
                "Arcanist": 64,
                "Tenacity": 37,
                "Shadow Ward": 46,
                "Tumbling": 51
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 73,
                "Medium Armor Focus": 8,
                "Spell Shield": 16,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Bashing Focus": 16,
                "Warlord": 56,
                "Mooncalf": 64,
                "Tenacity": 37,
                "Shadow Ward": 46,
                "Tumbling": 51
            }, ["Mooncalf"])
        )
    ],
    "cr": [
        new CpBuild(
            "Portal Tank",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 1,
                "Elemental Defender": 64,
                "Thick Skinned": 81,
                "Quick Recovery": 43
            }, []),
            new CpTree({
                "Sprinter": 22,
                "Warlord": 56,
                "Arcanist": 64,
                "Shadow Ward": 72,
                "Tumbling": 56
            }, [])
        ),
        new CpBuild(
            "Mini Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 64,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 16,
                "Quick Recovery": 43
            }, []),
            new CpTree({
                "Sprinter": 22,
                "Warlord": 56,
                "Arcanist": 64,
                "Shadow Ward": 72,
                "Tumbling": 56
            }, [])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 66,
                "Spell Shield": 51,
                "Elemental Defender": 64,
                "Thick Skinned": 66,
                "Quick Recovery": 23
            }, []),
            new CpTree({
                "Sprinter": 35,
                "Warlord": 56,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 11,
                "Tumbling": 61
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 66,
                "Spell Shield": 51,
                "Elemental Defender": 64,
                "Thick Skinned": 66,
                "Quick Recovery": 23
            }, []),
            new CpTree({
                "Sprinter": 35,
                "Warlord": 56,
                "Mooncalf": 64,
                "Tenacity": 43,
                "Shadow Ward": 11,
                "Tumbling": 61
            }, ["Mooncalf"])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 66,
                "Spell Shield": 55,
                "Elemental Defender": 64,
                "Thick Skinned": 66,
                "Quick Recovery": 19
            }, []),
            new CpTree({
                "Sprinter": 33,
                "Warlord": 56,
                "Arcanist": 64,
                "Tenacity": 10,
                "Shadow Ward": 51,
                "Tumbling": 56
            }, ["Arcanist"])
        )
    ],
    "dsa": [
        new CpBuild(
            "Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 6,
                "Quick Recovery": 19
            }, []),
            new CpTree({
                "Bashing Focus": 10,
                "Warlord": 48,
                "Arcanist": 64,
                "Tenacity": 37,
                "Shadow Ward": 72,
                "Tumbling": 39
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Light Armor Focus": 30,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Bashing Focus": 3,
                "Sprinter": 8,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 37,
                "Shadow Ward": 56,
                "Thick Skinned": 61
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Light Armor Focus": 30,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Bashing Focus": 3,
                "Sprinter": 8,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 37,
                "Shadow Ward": 56,
                "Thick Skinned": 61
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 81,
                "Medium Armor Focus": 30,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Bashing Focus": 3,
                "Sprinter": 8,
                "Warlord": 51,
                "Mooncalf": 64,
                "Tenacity": 37,
                "Shadow Ward": 56,
                "Thick Skinned": 61
            }, ["Mooncalf"])
        )
    ],
    "hof": [
        new CpBuild(
            "Main Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 11
            }, []),
            new CpTree({
                "Sprinter": 37,
                "Warlord": 56,
                "Tenacity": 49,
                "Shadow Ward": 72,
                "Tumbling": 56
            }, [])
        ),
        new CpBuild(
            "Off Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 11
            }, []),
            new CpTree({
                "Sprinter": 19,
                "Warlord": 23,
                "Mooncalf": 64,
                "Tenacity": 43,
                "Shadow Ward": 65,
                "Tumbling": 56
            }, [])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Light Armor Focus": 10,
                "Thick Skinned": 81
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 37,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 61,
                "Tumbling": 61
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 81,
                "Medium Armor Focus": 10,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Thick Skinned": 81
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 37,
                "Mooncalf": 64,
                "Tenacity": 19,
                "Shadow Ward": 61,
                "Tumbling": 61
            }, ["Mooncalf"])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 49,
                "Hardy": 49,
                "Light Armor Focus": 10,
                "Thick Skinned": 81
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 37,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 61,
                "Tumbling": 61
            }, ["Arcanist"])
        )
    ],
    "hrc": [
        new CpBuild(
            "Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 43,
                "Hardy": 64,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 16
            }, []),
            new CpTree({
                "Sprinter": 17,
                "Warlord": 37,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 72,
                "Tumbling": 37
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Light Armor Focus": 16,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 16,
                "Warlord": 34,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 76,
                "Tumbling": 37
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 16,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 16,
                "Warlord": 34,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 76,
                "Tumbling": 37
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 16,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 61
            }, []),
            new CpTree({
                "Sprinter": 16,
                "Warlord": 34,
                "Mooncalf": 64,
                "Tenacity": 43,
                "Shadow Ward": 76,
                "Tumbling": 37
            }, ["Mooncalf"])
        )
    ],
    "ka": [
        new CpBuild(
            "Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 37,
                "Hardy": 64,
                "Thick Skinned": 66,
                "Heavy Armor Focus": 11,
                "Quick Recovery": 11
            }, []),
            new CpTree({
                "Warlord": 40,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 81,
                "Tumbling": 66
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 54,
                "Elemental Defender": 64,
                "Hardy": 27,
                "Thick Skinned": 37,
                "Quick Recovery": 15
            }, []),
            new CpTree({
                "Sprinter": 8,
                "Warlord": 56,
                "Arcanist": 76,
                "Shadow Ward": 74,
                "Tumbling": 56
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 54,
                "Elemental Defender": 64,
                "Hardy": 27,
                "Thick Skinned": 37,
                "Quick Recovery": 15
            }, []),
            new CpTree({
                "Sprinter": 8,
                "Warlord": 56,
                "Arcanist": 76,
                "Shadow Ward": 74,
                "Tumbling": 56
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 54,
                "Elemental Defender": 64,
                "Hardy": 27,
                "Thick Skinned": 37,
                "Quick Recovery": 15
            }, []),
            new CpTree({
                "Sprinter": 8,
                "Warlord": 56,
                "Mooncalf": 76,
                "Shadow Ward": 74,
                "Tumbling": 56
            }, ["Mooncalf"])
        )
    ],
    "ma": [
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 13,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Light Armor Focus": 20,
                "Thick Skinned": 52
            }, []),
            new CpTree({
                "Bashing Focus": 11,
                "Sprinter": 8,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 37,
                "Tumbling": 56
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 73,
                "Medium Armor Focus": 20,
                "Spell Shield": 13,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 52
            }, []),
            new CpTree({
                "Bashing Focus": 11,
                "Sprinter": 8,
                "Warlord": 51,
                "Mooncalf": 64,
                "Tenacity": 43,
                "Shadow Ward": 37,
                "Tumbling": 56
            }, ["Mooncalf"])
        )
    ],
    "mol": [
        new CpBuild(
            "Main Tank",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 3,
                "Elemental Defender": 64,
                "Hardy": 37,
                "Thick Skinned": 66,
                "Quick Recovery": 19
            }, []),
            new CpTree({
                "Sprinter": 28,
                "Warlord": 37,
                "Arcanist": 43,
                "Tenacity": 29,
                "Shadow Ward": 72,
                "Tumbling": 61
            }, [])
        ),
        new CpBuild(
            "Off Tank",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 16,
                "Elemental Defender": 64,
                "Hardy": 43,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Bashing Focus": 39,
                "Sprinter": 16,
                "Warlord": 51,
                "Arcanist": 64,
                "Shadow Ward": 44,
                "Tumbling": 56
            }, [])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 48,
                "Elemental Defender": 64,
                "Hardy": 19,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Sprinter": 29,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 51,
                "Tumbling": 56
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 48,
                "Elemental Defender": 64,
                "Hardy": 19,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Sprinter": 29,
                "Warlord": 51,
                "Mooncalf": 64,
                "Tenacity": 19,
                "Shadow Ward": 51,
                "Tumbling": 56
            }, ["Mooncalf"])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 48,
                "Elemental Defender": 64,
                "Hardy": 19,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Sprinter": 29,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 51,
                "Tumbling": 56
            }, ["Arcanist"])
        )
    ],
    "so": [
        new CpBuild(
            "Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 43,
                "Hardy": 64,
                "Thick Skinned": 66,
                "Quick Recovery": 16
            }, []),
            new CpTree({
                "Sprinter": 29,
                "Warlord": 56,
                "Arcanist": 43,
                "Tenacity": 19,
                "Shadow Ward": 72,
                "Tumbling": 51
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 73,
                "Elemental Defender": 43,
                "Hardy": 64,
                "Light Armor Focus": 24,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Sprinter": 35,
                "Warlord": 26,
                "Arcanist": 64,
                "Tenacity": 43,
                "Shadow Ward": 51,
                "Tumbling": 51
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 73,
                "Elemental Defender": 43,
                "Hardy": 64,
                "Light Armor Focus": 24,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Sprinter": 38,
                "Warlord": 37,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 51,
                "Tumbling": 61
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 73,
                "Medium Armor Focus": 24,
                "Elemental Defender": 43,
                "Hardy": 64,
                "Thick Skinned": 66
            }, []),
            new CpTree({
                "Sprinter": 38,
                "Warlord": 37,
                "Mooncalf": 64,
                "Tenacity": 19,
                "Shadow Ward": 51,
                "Tumbling": 61
            }, ["Mooncalf"])
        )
    ],
    "ss": [
        new CpBuild(
            "Tank",
            new CpTree({
                "Ironclad": 81,
                "Elemental Defender": 49,
                "Hardy": 43,
                "Thick Skinned": 81,
                "Heavy Armor Focus": 16
            }, []),
            new CpTree({
                "Sprinter": 22,
                "Warlord": 56,
                "Arcanist": 64,
                "Shadow Ward": 72,
                "Tumbling": 56
            }, [])
        ),
        new CpBuild(
            "Healer",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 34,
                "Elemental Defender": 64,
                "Thick Skinned": 72,
                "Quick Recovery": 19
            }, []),
            new CpTree({
                "Sprinter": 39,
                "Warlord": 37,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 44,
                "Tumbling": 67
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 40,
                "Elemental Defender": 64,
                "Thick Skinned": 66,
                "Quick Recovery": 19
            }, []),
            new CpTree({
                "Sprinter": 39,
                "Warlord": 37,
                "Arcanist": 64,
                "Tenacity": 19,
                "Shadow Ward": 44,
                "Tumbling": 67
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 81,
                "Spell Shield": 40,
                "Elemental Defender": 64,
                "Thick Skinned": 66,
                "Quick Recovery": 19
            }, []),
            new CpTree({
                "Sprinter": 39,
                "Warlord": 37,
                "Mooncalf": 64,
                "Tenacity": 19,
                "Shadow Ward": 44,
                "Tumbling": 67
            }, ["Mooncalf"])
        )
    ],
    "vh": [
        new CpBuild(
            "Mag DPS",
            new CpTree({
                "Ironclad": 73,
                "Spell Shield": 13,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Light Armor Focus": 20,
                "Thick Skinned": 52
            }, []),
            new CpTree({
                "Bashing Focus": 11,
                "Sprinter": 7,
                "Warlord": 51,
                "Arcanist": 64,
                "Tenacity": 15,
                "Shadow Ward": 66,
                "Tumbling": 56
            }, ["Arcanist"])
        ),
        new CpBuild(
            "Stam DPS",
            new CpTree({
                "Ironclad": 73,
                "Medium Armor Focus": 20,
                "Spell Shield": 13,
                "Elemental Defender": 56,
                "Hardy": 56,
                "Thick Skinned": 52
            }, []),
            new CpTree({
                "Bashing Focus": 11,
                "Sprinter": 7,
                "Warlord": 51,
                "Mooncalf": 64,
                "Tenacity": 15,
                "Shadow Ward": 66,
                "Tumbling": 56
            }, ["Mooncalf"])
        )
    ]
}