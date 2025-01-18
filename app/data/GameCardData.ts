
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
        bild: "",
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
        name: "Seelenverschlinger",
        elemente: ["dunkelheit", "wind", "erde", "mystik"],
        bild: "",
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
        bild: "",
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
        name: "Erdenwächter",
        elemente: ["erde", "dunkelheit"],
        bild: "",
        arrayElemente: [
            { elements: ["licht"], exact: true },
            { elements: ["wasser"] }
        ]
    },
    {
        name: "Urzeitmonolith",
        elemente: ["erde", "mystik"],
        bild: "",
        arrayElemente: [
            { elements: ["wasser", "licht"], exact: false },
            { elements: ["wind"] }
        ]
    },
    {
        name: "Baum des Lebens",
        elemente: ["erde", "wasser", "licht"],
        bild: "",
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
        name: "Klinge des Phönix",
        elemente: ["feuer", "licht", "wind"],
        bild: "",
        arrayElemente: [
            { elements: ["wasser"], exact: true },
            { elements: ["wind", "erde", "dunkelheit"] }
        ]
    }
];
