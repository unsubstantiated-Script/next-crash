import { articles } from "../../../data";

//serving up articles from this API
export default function handler(req, res) {
	res.status(200).json(articles);
}
