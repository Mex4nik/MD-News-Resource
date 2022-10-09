import axios from "axios";
import { APIHost } from "./APISettings";

export default class LoginService {
	static async login(body) {
		try {
			const response = await axios.post(`${APIHost}/auth/login`, body);
			return response;
		} catch (error) {
			return {
				success: false,
				message: error.response.data.message,
			};
		}
	}
}
