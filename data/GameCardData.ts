
export interface SubArray {
    elements: string[];
    exact?: boolean;
}

export interface GameCard {
    name: string;
    elements: string[];
    bild: string;
    weakness: SubArray[];
}

export const gameCardData: GameCard[] = [
    {
        id: 1,
        name: "Ritter der Ewigen Glut",
        elements: ["f", "l"],
        bild: "",
        weakness: [
            { elements: ["w"], exact: true },
            { elements: ["a", "w", "l"] }
        ]
    },
    {
        id: 2,
        name: "Magmaherz",
        elements: ["f", "e", "d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/tckmujzdoc0zv0are4ts",
        weakness: [
            { elements: ["w"], exact: true },
            { elements: ["l", "w", "a"] }
        ]
    },
    {
        id: 3,
        name: "Inferno des Himmels",
        elements: ["f", "a", "l"],
        bild: "",
        weakness: [
            { elements: ["w", "e"] },
            { elements: ["a", "w", "d"] }
        ]
    },
    {
        id: 4,
        name: "Kristalllanze",
        elements: ["l", "a"],
        bild: "",
        weakness: [
            { elements: ["d"], exact: true },
            { elements: ["f", "w"] }
        ]
    },
    {
        id: 5,
        name: "Tiefenlord",
        elements: ["w", "d", "m", "l"],
        bild: "",
        weakness: [
            { elements: ["l", "l"], exact: true },
            { elements: ["f"] },
            { elements: ["e", "l", "a"] }
        ]
    },
    {
        id: 6,
        name: "gefräßige Welle",
        elements: ["d", "a", "e", "m"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/dcdwqugdwyzmjpmcklly",
        weakness: [
            { elements: ["l"] },
            { elements: ["f", "l"] }
        ]
    },
    {
        id: 7,
        name: "Moor der Verlorenen",
        elements: ["e", "w"],
        bild: "",
        weakness: [
            { elements: ["l", "l"], exact: true },
            { elements: ["f", "a", "l"] }
        ]
    },
    {
        id: 8,
        name: "Klagelied der Tiefen",
        elements: ["w", "l"],
        bild: "",
        weakness: [
            { elements: ["d", "d"], exact: true },
            { elements: ["f"] }
        ]
    },
    {
        id: 9,
        name: "Himmelszorn",
        elements: ["a", "l", "f", "m"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/e95kr1jmcpd26vg4ptig",
        weakness: [
            { elements: ["e"], exact: true },
            { elements: ["w", "d"] }
        ]
    },
    {
        id: 10,
        name: "Wintermahlstrom",
        elements: ["a", "w"],
        bild: "",
        weakness: [
            { elements: ["f"], exact: true },
            { elements: ["e", "f"] },
            { elements: ["l", "d", "m"] }
        ]
    },
    {
        id: 11,
        name: "Himmelsschwinge",
        elements: ["a", "l"],
        bild: "",
        weakness: [
            { elements: ["d", "l"] },
            { elements: ["w", "a", "f"] }
        ]
    },
    {
        id: 12,
        name: "aklinge",
        elements: ["a", "m", "f"],
        bild: "",
        weakness: [
            { elements: ["w"], exact: true },
            { elements: ["l", "e", "d"] }
        ]
    },
    {
        id: 13,
        name: "Summende Legion",
        elements: ["a", "e", "l", "m"],
        bild: "",
        weakness: [
            { elements: ["d"] },
            { elements: ["f"] },
            { elements: ["a", "w", "d"] }
        ]
    },
    {
        id: 14,
        name: "Fels",
        elements: ["e", "d"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ih1cngyohuhi6oikhart",
        weakness: [
            { elements: ["l"], exact: true },
            { elements: ["w"] }
        ]
    },
    {
        id: 15,
        name: "Thron der Eitelkeit",
        elements: ["e", "m"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/eno86iwljtvtrxtj6ckl",
        weakness: [
            { elements: ["w", "l"] },
            { elements: ["a"] }
        ]
    },
    {
        id: 16,
        name: "Baum des Lebens",
        elements: ["e", "w", "l"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/cspqdukpkd4zzkuf7lsl",
        weakness: [
            { elements: ["d", "d"], exact: true },
            { elements: ["a", "f"] }
        ]
    },
    {
        id: 17,
        name: "Chroniken des ls",
        elements: ["l", "m"],
        bild: "",
        weakness: [
            { elements: ["d"], exact: true },
            { elements: ["f", "w", "a"] }
        ]
    },
    {
        id: 18,
        name: "Schleier der Täuschung",
        elements: ["m", "d"],
        bild: "",
        weakness: [
            { elements: ["l", "w"]},
            { elements: ["a"] }
        ]
    },
    {
        id: 19,
        name: "Kerze der Hoffnung",
        elements: ["f", "l", "a"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/jdzorozzs7kyqbrbnpol",
        weakness: [
            { elements: ["w"], exact: true },
            { elements: ["a", "e", "d"] }
        ]
    }
];
