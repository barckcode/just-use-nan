// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://justuse.nan.builders',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
	},
});
