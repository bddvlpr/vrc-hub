import i18n, { type Config } from 'sveltekit-i18n';
import en from './en';
import nl from './nl';

const config: Config = {
	initLocale: localStorage.getItem('locale') || 'en',
	fallbackLocale: 'en',
	translations: {
		en,
		nl
	}
};

export const { locale, locales, t } = new i18n(config);
locale.subscribe((newLocale) => localStorage.setItem('locale', newLocale || 'en'));
