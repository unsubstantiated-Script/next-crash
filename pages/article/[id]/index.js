import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
	// const router = useRouter();
	// const { id } = router.query;

	return (
		<>
			<Meta title={article.title} description={article.excerpt} />
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href='/'>Go Back</Link>
		</>
	);
};

//Next method w/ context to get the id of the url
export const getStaticProps = async (context) => {
	const res = await fetch(`${server}/api/articles/${context.params.id}`);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

//This is going to generate all the paths
export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	//array of article ids
	const ids = articles.map((article) => article.id);

	//Loading up the ids in a params object
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		//If there is something not in the data, a 404 is returned
		fallback: false,
	};
};

// //Next method w/ context to get the id of the url
// export const getStaticProps = async (context) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
// 	);
// 	const article = await res.json();

// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };

// //This is going to generate all the paths
// export const getStaticPaths = async () => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// 	const articles = await res.json();

// 	//array of article ids
// 	const ids = articles.map((article) => article.id);

// 	//Loading up the ids in a params object
// 	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

// 	return {
// 		paths,
// 		//If there is something not in the data, a 404 is returned
// 		fallback: false,
// 	};
// };

export default article;
