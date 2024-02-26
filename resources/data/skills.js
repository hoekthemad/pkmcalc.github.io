let skills= {
    theorder: {
        faith: {
            effect: effectTypes.income,
            effectvalue: 0.205,
            baseprice: 1,
            io: {
                html: "faith", display: "Faith", import: "faith"
            }
        },
        zeal: {
            effect: effectTypes.allprice,
            effectvalue: 0.12,
            baseprice: 1,
            io: {
                html: "zeal", display: "Zeal", import: "zeal"
            }
        },
        devotion: {
            effect: effectTypes.happiness,
            effectvalue: 0.135,
            baseprice: 1,
            io: {
                html: "devotion", display: "Zeal", import: "zeal"
            }
        },
        fervour: {
            effect: effectTypes.shopprice,
            effectvalue: 0.0135,
            baseprice: 1,
            io: {
                html: "fervour", display: "Fervour", import: "fervour"
            }
        }
    },
    fundamentals: {
        productivity: {
            effect: effectTypes.income,
            effectvalue: 0.03,
            baseprice: 1,
            io: {
                html: "productivity", display: "Productivity", import: "productivity"
            }
        },
        concentration: {
            effect: effectTypes.skilleffects,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "concentration", display: "Concentration", import: "concentration"
            }
        },
        bargaining: {
            effect: effectTypes.allprice,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "bargaining", display: "Bargaining", import: "bargaining"
            }
        },
        meditation: {
            effect: effectTypes.happiness,
            effectvalue: 0.01,
            baseprice: 1,
            io: {
                html: "meditation", display: "Meditation", import: "meditation"
            }
        }
    },
    combat: {
        strength: 0.015,
        battletactics: 0.01,
        musclememory: 0.01
    },
    magic: {
        manacontrol: 0.01,
        lifeessence: 0.02,
        resilience: 0.005,
        materialism: 0.04
    },
    darkmagic: {
        fanaticaldevotion: 0.01,
        ardentbelief: 0.03,
        zealousconviction: 0.01,
        extremepiety: 0.01,
        absolutefaith: 0.01,
        devoutmastery: 0.002,
        doggedperseverance: 0.003,
        blazingfervour: 0.0027
    }
};