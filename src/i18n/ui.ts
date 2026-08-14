import type { Locale } from "./utils";

/**
 * Todos los textos del sitio, en un único sitio.
 *
 * `es` es la referencia: al declarar `en` con el tipo `typeof es`, TypeScript
 * falla el build (`astro check`) si añades un texto en español y te olvidas de
 * traducirlo, o si sobra una clave. No se puede volver a desincronizar.
 */
const es = {
    header: {
        cv: "Descargar CV",
        cvFile: "/cv/cvSpanish.pdf",
        langMenu: "Cambiar idioma",
    },
    meta: {
        title: "Portfolio Daniel Castillo - FullStack Developer",
        description:
            "Portfolio de Daniel Castillo Balboa. Programador FullStack de España y Guinea Ecuatorial",
        ogTitle: "Portfolio de Daniel Castillo Balboa. FullStack developer",
        ogDescription:
            "Programador FullStack con +2 años de experiencia de España y Guinea Ecuatorial.",
    },
    info: {
        openToWork: "Disponible para trabajar",
        role: "FullStack Developer",
        aboutTitle: "Sobre mí",
        aboutText:
            "Desarrollador Web con experiencia en la creación y mantenimiento de aplicaciones web.",
        yearsLabel: "Años de experiencia",
        location: "De La Rioja, España",
        avatarAlt: "Imagen emoji de Daniel Castillo",
    },
    experience: {
        title: "Experiencia",
        subtitle: "He trabajado en proyectos para empresas como",
        cta: (empresa: string) => `Visita ${empresa}`,
        logoAlt: (empresa: string) => `Logo de ${empresa}`,
    },
    technologies: {
        title: "Tecnologías",
        subtitle: "Algunas de las tecnologías que he utilizado",
    },
    projects: {
        title: "Proyectos",
        subtitle: "Grandes proyectos, grandes enseñanzas",
        desktopAlt: (proyecto: string) =>
            `Vista de escritorio de ${proyecto}, web hecha por Daniel Castillo Balboa`,
        mobileAlt: (proyecto: string) =>
            `Vista móvil de ${proyecto}, web hecha por Daniel Castillo Balboa`,
    },
    certificates: {
        title: "Titulación",
        subtitle: "Algunos titulos que he adquirido con el tiempo",
        alt: (titulo: string) =>
            `Imagen del titulo de ${titulo} de Daniel Castillo Balboa`,
    },
    contact: {
        title: "¿Trabajamos juntos?",
        subtitle:
            "Mándame un email con lo que necesitas y lo más pronto posible me pondre en contacto con usted.",
        cta: "Contactarme",
    },
};

const en: typeof es = {
    header: {
        cv: "Download CV",
        cvFile: "/cv/cvEnglish.pdf",
        langMenu: "Change language",
    },
    meta: {
        title: "Daniel Castillo Portfolio - FullStack Developer",
        description:
            "The portfolio of Daniel Castillo Balboa. FullStack programmer from Spain and Equatorial Guinea.",
        ogTitle: "Portfolio of Daniel Castillo Balboa. FullStack developer.",
        ogDescription:
            "FullStack developer with +2 years of experience from Spain and Equatorial Guinea.",
    },
    info: {
        openToWork: "Open To Work",
        role: "FullStack Developer",
        aboutTitle: "About Me",
        aboutText:
            "Web Developer with experience in the creation and maintenance of web applications.",
        yearsLabel: "Years of experience",
        location: "From La Rioja, Spain",
        avatarAlt: "Emoji picture of Daniel Castillo",
    },
    experience: {
        title: "Experience",
        subtitle: "I have worked on projects for companies such as",
        cta: (company: string) => `Visit ${company}`,
        logoAlt: (company: string) => `${company} logo`,
    },
    technologies: {
        title: "Technologies",
        subtitle: "Some of the technologies that I have used",
    },
    projects: {
        title: "Projects",
        subtitle: "Great projects, great teachings",
        desktopAlt: (project: string) =>
            `Desktop view of ${project}, website made by Daniel Castillo Balboa`,
        mobileAlt: (project: string) =>
            `Mobile view of ${project}, website made by Daniel Castillo Balboa`,
    },
    certificates: {
        title: "Certifications",
        subtitle: "Some titles I have acquired over time",
        alt: (title: string) =>
            `Picture of the ${title} certificate of Daniel Castillo Balboa`,
    },
    contact: {
        title: "Shall we work together?",
        subtitle:
            "Send me an email with what you need, and I'll get back to you as soon as possible.",
        cta: "Contact me",
    },
};

export const UI = { es, en } satisfies Record<Locale, typeof es>;

/** Textos del idioma indicado */
export function useTranslations(locale: Locale) {
    return UI[locale];
}
