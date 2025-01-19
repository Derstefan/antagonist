
export interface SubArray {
    elements: string[];
    exact?: boolean;
}

export interface GameCard {
    name: string;
    type: string;
    elements: string[];
    bild: string;
    weakness: SubArray[];
}



export const gameCardData: GameCard[] = [
    {
        name: "Ritter der Ewigen Glut",
        type: "attacking",
        elements: ["f", "f", "f"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/pjb4dsp2gmwnlwanaktw",
        weakness: [
            { elements: ["w","w"]},
            { elements: ["l", "l", "l"] }
        ]
    },
    {
        name: "Magmaherz",
        type: "environment",
        elements: ["f", "e", "d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/tckmujzdoc0zv0are4ts",
        weakness: [
            { elements: ["w"], exact: true },
            { elements: ["l", "w", "a"] }
        ]
    },
    {
        name: "Inferno des Himmels",
        type: "environment",

        elements: ["f", "f", "f","a"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/h9ni15nolmevqdqtdcov",
        weakness: [
            { elements: ["w", "w","w","w"] },
            { elements: ["e", "e","e","e"] },
            { elements: ["m"] }
        ]
    },
    {
        name: "Lehm Golem",
        type: "attacking",
        elements: ["e", "e", "e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/cvtmttyh3c6blh43cpvy",
        weakness: [
            { elements: ["w","w"] },
            { elements: ["f", "f","f"] },
            { elements: ["m","m"] }

        ]
    },
    {
        name: "Kobolt der Flammen",
        type: "attacking",
        elements: ["f"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/jpjuxra3qwk484ssmd4y",
        weakness: [
            { elements: ["w"]},
            { elements: ["f","f"] },
            { elements: ["e","e"] }
        ]
    },
    {
        name: "gefräßige Welle",
        type: "attacking",
        elements: ["d", "a", "e", "m"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/dcdwqugdwyzmjpmcklly",
        weakness: [
            { elements: ["l"] },
            { elements: ["f", "l"] }
        ]
    },
    {
        name: "Moor der Verlorenen",
        type: "environment",
        elements: ["e", "w","d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/vmj1xzm2hjffuutrbemc",
        weakness: [
            { elements: ["l", "l"]},
            { elements: ["e", "e", "e"] }
        ]
    },
    {
        name: "Himmelszorn",
        type: "attacking",

        elements: ["a", "l", "f", "m"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/e95kr1jmcpd26vg4ptig",
        weakness: [
            { elements: ["e"], exact: true },
            { elements: ["w", "d"] }
        ]
    },
    {
        name: "Himmelsschwinge",
        type: "attacking",

        elements: ["f", "l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/n1pb7csoviqgtigimqz6",
        weakness: [
            { elements: ["w", "w"] },
            { elements: ["e", "e", "e"] }
        ]
    },
    {
        name: "Feuerbeschwörung",
        type: "environment",

        elements: ["f"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["w"]},
            { elements: ["e","e"] },
            { elements: ["l","l"] }
        ]
    },
    {
        name: "Fels",
        type: "attacking",
        elements: ["e", "d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ih1cngyohuhi6oikhart",
        weakness: [
            { elements: ["l"], exact: true },
            { elements: ["w"] }
        ]
    },
    {
        name: "Thron der Eitelkeit",
        type: "environment",

        elements: ["e", "m"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/eno86iwljtvtrxtj6ckl",
        weakness: [
            { elements: ["w", "l"], exact: true  },
            { elements: ["a"] }
        ]
    },
    {
        name: "Baum des Lebens",
        type: "environment",

        elements: ["e", "w", "l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/cspqdukpkd4zzkuf7lsl",
        weakness: [
            { elements: ["d", "d"], exact: true },
            { elements: ["a", "f"] }
        ]
    },
    {
        name: "Chroniken des Lichts",
        type: "environment",

        elements: ["l", "l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/y5e8j45joifu2tcrqnan",
        weakness: [
            { elements: ["d","d","d"] },
            { elements: ["f"] },
            { elements: ["w", "w"] }

        ]
    },
    {
        name: "Bienenschwarm",
        type: "attacking",
        elements: ["a", "e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/yaevqij9xu2unx5dow42",
        weakness: [
            { elements: ["f"]},
            { elements: ["w","w"] },
            { elements: ["d"] }
        ]
    },
    {
        name: "Kerze der Hoffnung",
        type: "environment",

        elements: ["f", "l", "a"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/jdzorozzs7kyqbrbnpol",
        weakness: [
            { elements: ["w"], exact: true },
            { elements: ["a", "e", "d"] }
        ]
    },
    {
        name: "Böe",
        type: "environment",

        elements: ["a"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["f"]},
            { elements: ["e","e"] },
        ]
    },
    {
        name: "Greif",
        type: "environment",

        elements: ["a","a"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["f","f","f"]},
            { elements: ["e","e"] },
            { elements: ["l","l"] }
        ]
    },
    {
        name: "Sirene",
        type: "attacking",

        elements: ["w","w","w","w","d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/lzrvyohn9mqm7u98zhlx",
        weakness: [
            { elements: ["f","f","f"]},
            { elements: ["e","e","e"] },
            { elements: ["l","l"] }
        ]
    },
     {
        name: "Eissplitter",
        type: "attacking",

        elements: ["w"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["f"]},
            { elements: ["e","e"] },
            { elements: ["l","l"] }
        ]
    },
     {
        name: "Lawine",
        type: "attacking",

        elements: ["e","e","e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["w","w","w"]},
            { elements: ["a","a"] },
            { elements: ["m"] }
        ]
    },
    {
        name: "Zentauer",
        type: "attacking",

        elements: ["e", "e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["f","f"]},
            { elements: ["d","d"] }
        ]
    },
    {
        name: "Verblendung",
        type: "environment",

        elements: ["l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            { elements: ["l","l","l"]},
            { elements: ["d","d"] },        ]
    },
    {
        name: "Mönch",
        type: "attacking",

        elements: ["l", "l", "l","e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/wxvzqydutg5nqa2vgnyc",
        weakness: [
            { elements: ["f","f","f"]},
            { elements: ["d","d","d"] },
            { elements: ["w","w"] }
        ]
    },
    {
        name: "Wunder",
        type: "environment",

        elements: ["l", "l", "l","l","l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/nmzgndpoif6c4p0xnssa",
        weakness: [
            { elements: ["m"]},
            { elements: ["w","d","d"], exact: true },

        ]
    },
    {
        name: "Schrecken der Tiefe",
        type: "attacking",

        elements: ["d", "e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ok2ltxpkzg2q11kdsnlw",
        weakness: [
            { elements: ["l"]},
            { elements: ["a","a"] },
            { elements: ["f","f"] } 
        ]
    },
    {
        name: "Untoter Krieger",
        type: "attacking",

        elements: ["d", "d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/p4fizqawejhbkqrg9mux",
        weakness: [
            { elements: ["f","f"]},
            { elements: ["l","l"] }
        ]
    },
    {
        name: "Geisterschiff",
        type: "attacking",

        elements: ["d", "d", "d", "w"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ghjfdjwhuqr389cwjzcn",
        weakness: [
            { elements: ["l","l","l"]},
            { elements: ["e","e","e","e"] },
            { elements: ["a","a","f","f"] }
        ]
    },
    {
        name: "Vampierfest",
        type: "attacking",

        elements: ["d", "d", "d", "d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ddraii8wn0k8or8h2maz",
        weakness: [
            { elements: ["l","l","l","l"]},
            { elements: ["f","f","f","f"] },
            { elements: ["l","f"], exact: true }

        ]
    },
    {
        name: "Spiegel",
        type: "attacking",

        elements: ["m", "l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/acapf4fjoc8stqf2kvei",
        weakness: [
            { elements: ["m","m"]},
            { elements: ["d","d"] },
            { elements: ["l","l"] }
        ]
    },
    {
        name: "Hexenkreis",
        type: "attacking",

        elements: ["m", "m", "m", "e"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/xezzbut53dzrhtjekj40",
        weakness: [
            { elements: ["f","f"]},
            { elements: ["d","d","d"] }
        ]
    },
];
