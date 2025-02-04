


export interface CardData {
    id: number;
    name: string;
    type: string;
    elements: string;
    bild: string;
    weakness: string[];
}



export const gameCardData: CardData[] = [
    {
        id: 0,
        name: "Ritter der Ewigen Glut",
        type: "attacking",
        elements: "ff",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/pjb4dsp2gmwnlwanaktw",
        weakness: ["ww", "ll"]
    },
    {
        id: 1,
        name: "Magmaherz",
        type: "environment",
        elements: "ffe",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/tckmujzdoc0zv0are4ts",
        weakness: ["=w", "lwa"]
    },
    {
        id: 2,
        name: "Inferno des Himmels",
        type: "environment",

        elements: "ffa",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/h9ni15nolmevqdqtdcov",
        weakness: [
            "www", "eee", "m"
        ]
    },
    {
        id: 3,
        name: "Lehm Golem",
        type: "attacking",
        elements: "ee",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/cvtmttyh3c6blh43cpvy",
        weakness: [
            "wa", "m"
        ]
    },
    {
        id: 4,
        name: "Kobold der Flammen",
        type: "attacking",
        elements: "f",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/jpjuxra3qwk484ssmd4y",
        weakness: [
            "w", "e"
        ]
    },
    {
        id: 5,
        name: "Welle",
        type: "attacking",
        elements: "ww",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/v1738617566/wave2_r0nzbi.jpg",
        weakness: [
            "lm", "ee"
        ]
    },
    {
        id: 6,
        name: "Moor der Verlorenen",
        type: "environment",
        elements: "ed",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/vmj1xzm2hjffuutrbemc",
        weakness: [
            "ll", "eee"
        ]
    },
    {
        id: 7,
        name: "Himmelszorn",
        type: "attacking",

        elements:"aa",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/e95kr1jmcpd26vg4ptig",
        weakness: [
            "dd","ff"
        ]   
    },
    {
        id: 8,
        name: "Himmelsschwinge",
        type: "attacking",

        elements: "fl",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/n1pb7csoviqgtigimqz6",
        weakness: [
            "ww","ee"
        ]
    },
    {
        id: 9,
        name: "Feuerbeschwörung",
        type: "environment",

        elements: "f",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/k4ze2b4z3esnzi881snk",
        weakness: [
            "d", "l"
        ]
    },
    {
        id: 10,
        name: "Fels",
        type: "attacking",
        elements: "e",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ih1cngyohuhi6oikhart",
        weakness: [
            "e","w"
        ]
    },
    {
        id: 11,
        name: "Thron der Eitelkeit",
        type: "environment",

        elements: "em",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/eno86iwljtvtrxtj6ckl",
        weakness: [
            "=w","ff"
        ]
    },
    {
        id: 12,
        name: "Baum des Lebens",
        type: "environment",

        elements: "e",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/cspqdukpkd4zzkuf7lsl",
        weakness: [
            "dd","m"
        ]
    },
    {
        id: 13,
        name: "Chroniken des Lichts",
        type: "environment",

        elements: "l",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/y5e8j45joifu2tcrqnan",
        weakness: [
            "ddd","f","ww"
        ]
    },
    {
        id: 14,
        name: "Bienenschwarm",
        type: "attacking",
        elements: "a",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/yaevqij9xu2unx5dow42",
        weakness: [
            "f","ww","d"
        ]
    },
    {
        id: 15,
        name: "Kerze der Hoffnung",
        type: "environment",
        elements: "l",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/jdzorozzs7kyqbrbnpol",
        weakness: [
            "=w","a"
        ]
    },
    {
        id: 16,
        name: "Böe",
        type: "environment",
        elements: "a",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/aaudx7obeu1tsdk5vttz",
        weakness: [
            "f","ee"
        ]
    },
    {
        id: 17,
        name: "Greif",
        type: "environment",

        elements: "aa",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/tns5xkmwvf6jrqcdfigh",
        weakness: [
            "fff","ee","m"
        ]
    },
    {
        id: 18,
        name: "Sirene",
        type: "attacking",
       elements: "wwd",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/lzrvyohn9mqm7u98zhlx",
        weakness: [
            "=l","eee","dd"
        ]
    },
     {
        id: 19,
        name: "Eissplitter",
        type: "attacking",

        elements: "w",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/nbe2qxpjub1iwgbtntx3",
        weakness: [
            "f","e","ll"
        ]
    },
     {
        id: 20,
        name: "Lawine",
        type: "attacking",
        elements: "ee",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/kn0hcn9kfzjxnlcorwit",
        weakness: [
            "www","aa","m"
        ]
    },
    {
        id: 21,
        name: "Berggeist",
        type: "attacking",
        elements: "e",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/v5ev9lkcipfdbslfobwl",
        weakness: [
            "f","w"
        ]
    },
    {
        id: 22,
        name: "Verblendung",
        type: "environment",
        elements: "l",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/zm9nxpqorgkgoawgao9h",
        weakness: [
        "lll","dd"   ]
    },
    {
        id: 23,
        name: "Mönch",
        type: "attacking",
        elements: "lle",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/wxvzqydutg5nqa2vgnyc",
        weakness: [
            "fff","ddd","ww"
        ]
    },
    {
        id: 24,
        name: "Wunder",
        type: "environment",
        elements: "lll",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/nmzgndpoif6c4p0xnssa",
        weakness: [
            "m","=wdd"
        ]
    },
    {
        id: 25,
        name: "Schrecken der Tiefe",
        type: "attacking",
        elements: "de",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ok2ltxpkzg2q11kdsnlw",
        weakness: [
            "l","aa","ff"
        ]
    },
    {
        id: 26,
        name: "Untoter Krieger",
        type: "attacking",
         elements: "dd",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/p4fizqawejhbkqrg9mux",
        weakness: [
            "ff","ll"
        ]
    },
    {
        id: 27,
        name: "Geisterschiff",
        type: "attacking",
        elements: "ddw",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ghjfdjwhuqr389cwjzcn",
        weakness: [
            "lll","eeee","aaff"
        ]
    },
    {
        id: 28,
        name: "Vampierfest",
        type: "attacking",
        elements: "ddd",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/ddraii8wn0k8or8h2maz",
        weakness: [
            "lll","fff","=lf"
        ]
    },
    {
        id: 29,
        name: "Spiegel",
        type: "attacking",
        elements: "ml",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/acapf4fjoc8stqf2kvei",
        weakness: [
            "mm","dd","ll"
        ]
    },
    {
        id: 30,
        name: "Hexenkreis",
        type: "attacking",
        elements: "mm",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/xezzbut53dzrhtjekj40",
        weakness: [
            "ff","ddd"
        ]
    },
    {
        id: 31,
        name: "Lichtblitz",
        type: "attacking",
        elements: "la",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/shhowgxcqkhabhmrpumf",
        weakness: [
            "ee","a"
        ]
    },
    {
        id: 32,
        name: "Artefakt des Lichts",
        type: "attacking",
        elements: "ll",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/wbmn65yu68pbzzptdfhe",
        weakness: [
            "ee","ww"
        ]
    },
    {
        id: 33,
        name: "Labyrinth der Selbstkenntnis",
        type: "environment",
        elements: "mmm",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/skfiatxqwyr1mawnsii3",
        weakness: [
            "lll","ww","dd"
        ]
    },
    {
        id: 34,
        name: "Friedhof der Unschuld",
        type: "environment",
        elements: "d",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/toluonuk1hzr0f2bkx6f",
        weakness: [
            "e","ll"
        ]
    },
    {
        id: 35,
        name: "Krähe des Misstrauens",
        type: "environment",
        elements: "d",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/vig7vyc6hy9vglo8ns4v",
        weakness: [
            "l","w"
        ]
    },
    {
        id: 36,
        name: "perfide Spinne",
        type: "attacking",
        elements: "d",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/mjkjoq5zn1csnbwngn6j",
        weakness: [
            "a","w"
        ]
    },
    {
        id: 37,
        name: "Schlange der Zwietracht",
        type: "attacking",
        elements: "d",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/f_auto,q_auto/v1/antagonist/uyxy4ppgoprrspalwjdq",
        weakness: [
            "e","f"
        ]
    },
    {
        id: 38,
        name: "Mal des Trotzes",
        type: "environment",
        elements: "d",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/v1738265830/antagonist/g25sghplxshjx53apssw.webp",
        weakness: [
            "f","w"
        ]
    },
    {
        id: 39,
        name: "Sonnenaufgang",
        type: "environment",
        elements: "l",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/v1738617579/sunrise_jn4lse.webp",
        weakness: [
            "wa","m"
        ]
    },
    {
        id: 40,
        name: "Bärenkraft",
        type: "attacking",
        elements: "e",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617577/bear_mrtajg.webp",
        weakness: [
            "f","w"
        ]
    },
    {
        id: 41,
        name: "Träne der Trauer",
        type: "environment",
        elements: "w",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617576/waterdrop_cxotdg.webp",
        weakness: [
            "dd","w"
        ]
    },
    {
        id: 42,
        name:"Hügel der Weitsicht",
        type: "environment",
        elements: "e",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617576/hill_f7za2l.webp",
        weakness: [
            "f","a"
        ]
    },
    {
        id: 43,
        name:"Nebel der Zwietracht",
        type: "environment",
        elements: "ad",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617575/fogoffear_ilen6q.webp",
        weakness: [
            "f","aa"
        ]
    },
    {
        id: 44,
        name: "Tanz der Feuerbeschwörung",
        type: "attacking",
        elements: "f",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738620044/firedance_mof4xr.webp",
        weakness: [
            "w","e"
        ]
    },
    {
        id:45,
        name: "Willenskraft",
        type: "attacking",
        elements: "ef",
        bild: "https://res.cloudinary.com/dyouat9fl/image/upload/v1738617573/erdspalt_c8yayn.webp",
        weakness: [
            "ww","ll"
        ]        
    },
    {   id: 46,
        name:"Wissen der Ewigkeit",
        type: "environment",
        elements: "m",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617572/wisdom_bgyqty.jpg",
        weakness: [
            "ff","dd"
        ]
    },
    {
        id: 47,
        name: "Teppich der fernen Weite",
        type: "environment",
        elements: "am",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617571/carpet_dpwlql.jpg",
        weakness: [
            "ff","ee"
        ]
    },
    {
        id: 48,
        name: "Flackernde Flamme",
        type: "attacking",
        elements: "f",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617570/torch_auducx.jpg",
        weakness: [
            "w","e"
        ]
    },
    {
        id: 49,
        name: "Wolkenbruch",
        type: "environment",
        elements: "aw",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617569/rainy_cloud_cpgptc.jpg",
        weakness: [
            "ll","aa"
        ]
    },
    {
        id: 50,
        name: "Rauch der Verwirrung",
        type: "environment",
        elements: "f",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617568/steam_fseerx.jpg",
        weakness: [
            "a","l"
        ]
    },
    {
        id: 51,
        name:"Quelle der Reinheit",
        type: "environment",
        elements: "wl",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617567/spring_c3j6ci.jpg",
        weakness: [
            "dd","we"
        ]
    },
    {
        id: 52,
        name:"Mondlicht",
        type: "environment",
        elements: "ld",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617566/moonlight_dnrtmb.jpg",
        weakness: [
            "ll","af"
        ]
    },
    {
        id: 53,
        name:"Rätsel der Ahnen",
        type: "environment",
        elements: "m",
        bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617563/riddle_ay6ed4.jpg",
        weakness: [
            "ll","ff"
        ]
    }
,{
    id: 54,
    name:"Windsprössling",
    type: "environment",
    elements: "a",
    bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617564/sprout_kbaowt.jpg",
    weakness: [
        "f","d"
    ]
},
{
    id: 55,
    name:"Kern der Bosheit",
    type: "environment",
    elements: "fd",
    bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617563/darkcore_hhjq4d.jpg",
    weakness: [
        "ww","lll"
    ]
}
,{
    id: 56,
    name:"Kugel der Weissagung",
    type: "environment",
    elements: "lm",
    bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617561/future_utizlh.jpg",
    weakness: [
        "ww","d"
    ]
},
{
    id: 57,
    name:"Ritual der Rachsucht",
    type: "environment",
    elements: "ddd",
    bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617560/darkritual_kvz7zy.jpg",
    weakness: [
        "lll","ww"
    ]
},
{
    id: 58,
    name:"Eisdrache des Nordens",
    type: "attacking",
    elements: "wwa",
    bild:"https://res.cloudinary.com/dyouat9fl/image/upload/v1738617561/waterdragon_aqvt3z.jpg",
    weakness: [
        "fff","mm"
    ]
},
{
    id: 59,
    name:"Krieger des Feuers",
    type: "attacking",
    elements: "ff",
    bild: "https://res.cloudinary.com/dyouat9fl/image/upload/v1738617560/firewarrior_laiwv5.jpg",
    weakness: [
        "w","ll"
    ]
},
];
