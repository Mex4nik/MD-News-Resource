import axios from "axios";
import { APIHost } from "./APISettings";

export default class CommentsService {
    static async getCommentsByArticleId(id) {
        const response = await axios.get(`${APIHost}/comments/article/${id}`);
        return response;
    }

    static async createComment(token, body) {
        const response = await axios.post(`${APIHost}/comments`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
        return response;
    }
}