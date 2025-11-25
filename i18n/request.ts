// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing"; // Not needed if we hardcode 'en'
// import { headers } from "next/headers"; // Not needed if we hardcode 'en'

// Hardcode the desired locale
const forcedLocale = 'en';

export default getRequestConfig(async () => {
  // We no longer read headers or rely on 'routing.defaultLocale'.

  try {
    const messages = (await import(`../messages/${forcedLocale}.json`))
      .default;
    return {
      locale: forcedLocale, // Always use 'en'
      messages,
    };
  } catch (error) {
    console.error(`Error loading messages for ${forcedLocale}:`, error);
    // As a fallback, you might return empty messages or throw an error.
    // For simplicity, we'll return the hardcoded English setup.
    // If you always want to use 'en', make sure '../messages/en.json' exists.
    return {
      locale: forcedLocale,
      messages: {}, // Or a minimal fallback
    };
  }
});