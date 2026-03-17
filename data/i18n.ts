export type Locale = "zh" | "en";

export type LocalizedText = {
  zh: string;
  en: string;
};

export function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}
