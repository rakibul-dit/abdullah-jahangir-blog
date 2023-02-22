import {
	getOptHomeImages,
	getOptHomeBlogs,
	getOptHomeQuotes,
	getOptHomeBooks,
} from "../lib/fetch";

import Meta from "../components/meta";
import Header from "../components/header2";
import Footer from "../components/footer";

import HomeCategory from "../components/home2/category";
import HomeImageSlider from "../components/home2/image-slider";
import HomePostList from "../components/home2/post-list";
import HomeQuoteSlider from "../components/home2/quote-slider";
import HomeBookList from "../components/home2/books";

export default function Home({ images, blogs, quotes, books }) {
	return (
		<>
			<Meta
				title="Dr. Monzur-E-Elahi | Official website"
				description="Dr. Monzur-E-Elahi | Official website"
				url="www.monzureelahi.com"
				image="/img/id/logo.png"
				type="website"
			/>

			<Header />

			<main className="viewport homepage">
				<HomeImageSlider images={images} />
				<HomeCategory />
				{/*<HomeFeatured />*/}
				<HomePostList blogs={blogs} />
				<HomeQuoteSlider quotes={quotes} />
				<HomeBookList books={books} />
			</main>

			<Footer />
		</>
	);
}

export async function getStaticProps(context) {
	const images = await getOptHomeImages();
	const blogs = await getOptHomeBlogs();
	const quotes = await getOptHomeQuotes();
	const books = await getOptHomeBooks();

	return {
		props: {
			images,
			blogs,
			quotes,
			books,
		},
	};
}
