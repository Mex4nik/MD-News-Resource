import axios from "axios";
import { TranslationAPIHost } from "./APISettings";

export const availableLanguages = [
	{
		name: "English",
		value: "en",
	},
	{
		name: "Ukrainian",
		value: "uk",
	},
	{
		name: "German",
		value: "de",
	},
	{
		name: "French",
		value: "fr",
	},
	{
		name: "Japanese",
		value: "ja",
	},
	{
		name: "Chinese",
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
