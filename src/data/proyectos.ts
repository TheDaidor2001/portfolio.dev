import type { Translated } from "./experiencia";

export interface Proyecto {
    /** Nombre del proyecto, igual en todos los idiomas */
    title: string;
    description: Translated;
    /** Nombres de archivo en /public/images, sin extensión */
    technologies: string[];
    /** Captura de escritorio */
    image: string;
    /** Captura móvil, la que se ve al pasar el ratón */
    image2: string;
    link: string;
}

export const PROYECTOS: Proyecto[] = [
    {
        title: "Spider-Man Brand New Day",
        description: {
            es: "Una web promocional para la película de Spider-Man Brand New Day.",
            en: "A promotional website for the Spider-Man Brand New Day film.",
        },
        technologies: ["astro", "tailwindcss", "html5", "css", "typescript"],
        image: "/images/spiderman_desktop.png",
        image2: "/images/spiderman-mobile.webp",
        link: "https://spidermanbrandnewday.es/",
    },
    {
        title: "Radio Malabo",
        description: {
            es: "Streaming de la radio nacional de Guinea Ecuatorial",
            en: "Streaming of the national radio of Equatorial Guinea",
        },
        technologies: ["astro", "tailwindcss", "html5", "css", "typescript"],
        image: "/images/r-malabo-desktop.webp",
        image2: "/images/r-malabo-mobile.webp",
        link: "https://www.radiomalabo.com/",
    },
    {
        title: "Teslo Shop",
        description: {
            es: "Un ecommerce completo de ropa con inicio de sesión",
            en: "A complete clothing ecommerce with login and payments",
        },
        technologies: [
            "nextjs",
            "tailwindcss",
            "html5",
            "css",
            "typescript",
            "postgresql",
        ],
        image: "/images/teslo-desktop.webp",
        image2: "/images/teslo-mobile.webp",
        link: "https://tesla-shop-daniel.vercel.app/",
    },
];
