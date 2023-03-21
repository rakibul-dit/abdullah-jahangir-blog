import { server } from "../lib/config";
import {
	getHomeBooks,
	getHomeLectures,
	getHomeArticles,
	getSomeImpLects,
	getHomeQns,
	getOptHomeQuotes,
} from "../lib/fetch";

import Layout from "../components/layout";
import Meta from "../components/meta";
import HomeBanner from "../components/home/banner";
import HomeBooks from "../components/home/books";
import HomeLectures from "../components/home/lectures";
import HomeArticles from "../components/home/articles";
import SomeLectures from "../components/home/some-lectures";
import { useEffect, useState } from "react";
import HomeQns from "../components/home/qns";
import AssunnahTrust from "../components/home/assunnah-trust";
import HomeQuoteSlider from "../components/home2/quote-slider";
import Header from "../components/header";

export default function Home({
	lectures,
	articles,
	books,
	someLectures,
	qns,
	quotes,
}) {
	const [isSmScr, setIsSmScr] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// set isSmScr depending on screen size
			const x = window.matchMedia("(max-width: 600px)");
			if (x.matches) {
				setIsSmScr(true);
			} else {
				setIsSmScr(false);
			}
			x.onchange = () => {
				if (x.matches) {
					setIsSmScr(true);
				} else {
					setIsSmScr(false);
				}
			};
		}
	}, []);

	return (
		<>
			<Header title="ড. আব্দুল্লাহ জাহাঙ্গীর (রাহি.)" />
			<Layout page="homepage">
				<Meta
					title=""
					description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত
				আলেম ও বহু গ্রন্থ প্রণেতা ছিলেন। তাঁর পূর্ণ নাম: আবু নসর
				মুহাম্মদ আব্দুল্লাহ জাহাঙ্গীর। তাঁর পিতার নাম খোন্দকার
				আনোয়ারুজ্জামান (রাহি.)। তিনি আব্দুল্লাহ জাহাঙ্গীর নামে
				দেশ জুড়ে পরিচিত।"
					url={server}
					image={`${server}/img/id/default_share.jpg`}
					type="website"
				/>
				<HomeBanner />
				<HomeLectures lectures={lectures} isSmScr={isSmScr} />
				<HomeArticles articles={articles} isSmScr={isSmScr} />
				<HomeBooks books={books} isSmScr={isSmScr} />
				<HomeQns qns={qns} isSmScr={isSmScr} />
				<SomeLectures lectures={someLectures} isSmScr={isSmScr} />
				<HomeQuoteSlider quotes={quotes} />
				<AssunnahTrust />
			</Layout>
		</>
	);
}

export async function getStaticProps(context) {
	// const recents = await getHomeRecentLectures();
	// const organizations = await getHomeOrganizations();
	// const papers = await getHomePapers();
	const lectures = await getHomeLectures();
	const articles = await getHomeArticles();
	const books = await getHomeBooks();
	const someLectures = await getSomeImpLects();
	const qns = await getHomeQns();
	const quotes = await getOptHomeQuotes();

	return {
		props: {
			lectures,
			articles,
			books,
			someLectures,
			qns,
			quotes,
		},
		revalidate: 60,
	};
}
