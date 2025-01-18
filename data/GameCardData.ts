
export interface SubArray {
    elements: string[];
    exact?: boolean;
}

export interface GameCard {
    name: string;
    elemente: string[];
    bild: string;
    arrayElemente: SubArray[];
}

export const gameCardData: GameCard[] = [
    {
        name: "Ritter der Ewigen Glut",
        elemente: ["feuer", "licht"],
        bild: "",
        arrayElemente: [
            { elements: ["wasser"], exact: true },
            { elements: ["wind", "wasser", "licht"] }
        ]
    },
    {
        name: "Magmaherz",
        elemente: ["feuer", "erde", "dunkelheit"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/tckmujzdoc0zv0are4ts",
        arrayElemente: [
            { elements: ["wasser"], exact: true },
            { elements: ["licht", "wasser", "wind"] }
        ]
    },
    {
        name: "Inferno des Himmels",
        elemente: ["feuer", "wind", "licht"],
        bild: "",
        arrayElemente: [
            { elements: ["wasser", "erde"], exact: false },
            { elements: ["wind", "wasser", "dunkelheit"] }
        ]
    },
    {
        name: "Kristalllanze",
        elemente: ["licht", "wind"],
        bild: "",
        arrayElemente: [
            { elements: ["dunkelheit"], exact: true },
            { elements: ["feuer", "wasser"] }
        ]
    },
    {
        name: "Tiefenlord",
        elemente: ["wasser", "dunkelheit", "mystik", "licht"],
        bild: "",
        arrayElemente: [
            { elements: ["licht", "licht"], exact: true },
            { elements: ["feuer"] },
            { elements: ["erde", "licht", "wind"] }
        ]
    },
    {
        name: "gefräßige Welle",
        elemente: ["dunkelheit", "wind", "erde", "mystik"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/dcdwqugdwyzmjpmcklly",
        arrayElemente: [
            { elements: ["licht"], exact: false },
            { elements: ["feuer", "licht"] }
        ]
    },
    {
        name: "Moor der Verlorenen",
        elemente: ["erde", "wasser"],
        bild: "",
        arrayElemente: [
            { elements: ["licht", "licht"], exact: true },
            { elements: ["feuer", "wind", "licht"] }
        ]
    },
    {
        name: "Klagelied der Tiefen",
        elemente: ["wasser", "licht"],
        bild: "",
        arrayElemente: [
            { elements: ["dunkelheit", "dunkelheit"], exact: true },
            { elements: ["feuer"] }
        ]
    },
    {
        name: "Himmelszorn",
        elemente: ["wind", "licht", "feuer", "mystik"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/e95kr1jmcpd26vg4ptig",
        arrayElemente: [
            { elements: ["erde"], exact: true },
            { elements: ["wasser", "dunkelheit"] }
        ]
    },
    {
        name: "Wintermahlstrom",
        elemente: ["wind", "wasser"],
        bild: "",
        arrayElemente: [
            { elements: ["feuer"], exact: true },
            { elements: ["erde", "feuer"] },
            { elements: ["licht", "dunkelheit", "mystik"] }
        ]
    },
    {
        name: "Himmelsschwinge",
        elemente: ["wind", "licht"],
        bild: "",
        arrayElemente: [
            { elements: ["dunkelheit", "licht"], exact: false },
            { elements: ["wasser", "wind", "feuer"] }
        ]
    },
    {
        name: "Windklinge",
        elemente: ["wind", "mystik", "feuer"],
        bild: "",
        arrayElemente: [
            { elements: ["wasser"], exact: true },
            { elements: ["licht", "erde", "dunkelheit"] }
        ]
    },
    {
        name: "Summende Legion",
        elemente: ["wind", "erde", "licht", "mystik"],
        bild: "",
        arrayElemente: [
            { elements: ["dunkelheit"], exact: false },
            { elements: ["feuer"] },
            { elements: ["wind", "wasser", "dunkelheit"] }
        ]
    },
    {
        name: "Fels",
        elemente: ["erde", "dunkelheit"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ih1cngyohuhi6oikhart",
        arrayElemente: [
            { elements: ["licht"], exact: true },
            { elements: ["wasser"] }
        ]
    },
    {
        name: "Thron der Eitelkeit",
        elemente: ["erde", "mystik"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/eno86iwljtvtrxtj6ckl",
        arrayElemente: [
            { elements: ["wasser", "licht"], exact: false },
            { elements: ["wind"] }
        ]
    },
    {
        name: "Baum des Lebens",
        elemente: ["erde", "wasser", "licht"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/cspqdukpkd4zzkuf7lsl",
        arrayElemente: [
            { elements: ["dunkelheit", "dunkelheit"], exact: true },
            { elements: ["wind", "feuer"] }
        ]
    },
    {
        name: "Chroniken des Lichts",
        elemente: ["licht", "mystik"],
        bild: "",
        arrayElemente: [
            { elements: ["dunkelheit"], exact: true },
            { elements: ["feuer", "wasser", "wind"] }
        ]
    },
    {
        name: "Schleier der Täuschung",
        elemente: ["mystik", "dunkelheit"],
        bild: "",
        arrayElemente: [
            { elements: ["licht", "wasser"], exact: false },
            { elements: ["wind"] }
        ]
    },
    {
        name: "Kerze der Hoffnung",
        elemente: ["feuer", "licht", "wind"],
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/jdzorozzs7kyqbrbnpol",
        arrayElemente: [
            { elements: ["wasser"], exact: true },
            { elements: ["wind", "erde", "dunkelheit"] }
        ]
    }
];
