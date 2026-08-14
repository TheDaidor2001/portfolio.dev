export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";
export const SITE = "https://danielportfolio.dev";

/** Nombre de cada idioma escrito en ese mismo idioma */
export const LOCALE_NAMES: Record<Locale, string> = {
    es: "Español",
    en: "English",
};

/** Idioma actual a partir de la URL: /en o /en/... => "en", el resto => "es" */
export function getLocale(pathname: string): Locale {
    return /^\/en(\/|$)/.test(pathname) ? "en" : DEFAULT_LOCALE;
}

/** Ruta sin el prefijo de idioma, siempre empezando por "/" */
export function stripLocale(pathname: string): string {
    const path = pathname.replace(/^\/en(?=\/|$)/, "");
    return path.startsWith("/") ? path : `/${path}`;
}

/**
 * La misma ruta en el idioma indicado, con barra final para que coincida
 * con los archivos que genera el build (/index.html, /en/index.html).
 */
export function localizePath(pathname: string, locale: Locale): string {
    const path = stripLocale(pathname);
    const localized = locale === DEFAULT_LOCALE ? path : `/en${path}`;
    return localized.endsWith("/") ? localized : `${localized}/`;
}

/** URL absoluta de una ruta en el idioma indicado, para canonical y hreflang */
export function localizeUrl(pathname: string, locale: Locale): string {
    return new URL(localizePath(pathname, locale), SITE).href;
}
