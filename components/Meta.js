import Head from "next/head";

//Checkout Next SEO
const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<link rel='icon' href='/favicon.ico' />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Next Newz",
	keywords: "web development, programming",
	description: "Get the latest news in web dev with Next",
};

export default Meta;
