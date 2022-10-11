import axios from "axios";
import { APIHost } from "./APISettings";

export default class ArticleService {
    static async getAllCategories() {
        const response = await axios.get(`${APIHost}/categories`);
        return response;
    }

    static async getAll() {
        const response = await axios.get(`${APIHost}/articles`);
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`${APIHost}/articles/${id}`);
        return response;
    }

    static async getAllByCategory(categoryId) {
        const response = await axios.get(`${APIHost}/articles/category/${categoryId}`);
        return response;
    }

    static async getCommentsByArticleId(id) {
        const response = await axios.get(`${APIHost}/comments/article/${id}`);
        return response;
    }

    static async createArticle(token, body) {
        debugger;
        const response = await axios.post(`${APIHost}/articles`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
        return response;
    }
}