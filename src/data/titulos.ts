import type { Translated } from "./experiencia";

export interface Titulo {
    title: Translated;
    image: string;
}

export const TITULOS: Titulo[] = [
    {
        title: {
            es: "Curso de Javascript completo",
            en: "Complete JavaScript course",
        },
        image: "/images/c-js.webp",
    },
    {
        title: {
            es: "Curso CSS",
            en: "CSS course",
        },
        image: "/images/c-css.webp",
    },
    {
        title: {
            es: "Curso Next- Framework de ReactJS",
            en: "Next.js - ReactJS Framework Course",
        },
        image: "/images/c-next.webp",
    },
    {
        title: {
            es: "Curso VueJS",
            en: "VueJS course",
        },
        image: "/images/c-vue.webp",
    },
];
