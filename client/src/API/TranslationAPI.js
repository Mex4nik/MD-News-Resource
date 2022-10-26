import axios from "axios";
import { TranslationAPIHost } from "./APISettings";

export const availableLanguages = [
	{
		name: "English",
		value: "en",
	},
	{
		name: "Українська",
		value: "uk",
	},
	{
		name: "Deutsch",
		value: "de",
	},
	{
		name: "Français",
		value: "fr",
	},
	{
		name: "日本語",
		value: "ja",
	},
	{
		name: "中國人",
		value: "zh",
	}
];

export default class TranslationService {
	static async translate(text, langToTranslate) {
		const body = {
			q: text,
			source: "auto",
			target: langToTranslate,
			format: "text",
		};
		const response = await axios.post(`${TranslationAPIHost}/translate`, body);
		return response;
	}
}
