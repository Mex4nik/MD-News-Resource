import axios from "axios";
import { APIHost } from "./APISettings";

export default class UsersService {
	static async getUserByEmail(token, email) {
		const response = await axios.get(`${APIHost}/users`, {
			params: {
				email,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	}
}
