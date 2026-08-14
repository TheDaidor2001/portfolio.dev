import type { Locale } from "../i18n/utils";

/** Un texto en los dos idiomas. Si falta uno, TypeScript avisa. */
export type Translated = Record<Locale, string>;

export interface Experiencia {
    /** Nombre de la empresa, igual en todos los idiomas */
    nombre: string;
    puesto: Translated;
    duration: Translated;
    /** Pinta el punto verde de "trabajo actual" */
    current: boolean;
    description: Translated;
    /** Tecnologías: nombres propios, no se traducen */
    highlights: string[];
    url: string;
    /** Ruta del logo, o null para usar el logo "DC" */
    logo: string | null;
    bg_url: string;
}

export const EXPERIENCIA: Experiencia[] = [
    {
        nombre: "InfoJobs",
        puesto: {
            es: "Front-End Developer",
            en: "Front-End Developer",
        },
        duration: {
            es: "Jul 2026 - Ago 2026",
            en: "Jul 2026 - Aug 2026",
        },
        current: false,
        description: {
            es: "Desarrollo de la web promocional de la película de Spider-man Brand New Day. Implementación de animaciones y efectos visuales para mejorar la experiencia del usuario.",
            en: "Development of the promotional website for the Spider-Man Brand New Day film. Implementation of animations and visual effects to improve the user experience.",
        },
        highlights: [
            "AstroJS",
            "TypeScript",
            "Design System",
            "Accesibilidad",
            "Gsap",
            "TailwindCSS",
        ],
        url: "https://spidermanbrandnewday.es/",
        logo: "/images/infojobs_logo.png",
        bg_url: "/images/bg-2.webp",
    },
    {
        nombre: "Freelance",
        puesto: {
            es: "Web Developer",
            en: "Web Developer",
        },
        duration: {
            es: "Jun 2024 - Actualmente",
            en: "Jun 2024 - Today",
        },
        current: true,
        description: {
            es: "Diseño y construyo webs a medida de principio a fin: hablo con el cliente, defino la interfaz, la desarrollo y la despliego. Webs rápidas, responsive y pensadas para posicionar y convertir.",
            en: "I design and build custom websites end to end: I talk to the client, define the interface, develop it and ship it. Fast, responsive sites built to rank and convert.",
        },
        highlights: ["Astro", "Next.js", "Tailwind", "SEO"],
        url: "https://github.com/TheDaidor2001",
        logo: null,
        bg_url: "/images/bg-gartoll.webp",
    },
];
