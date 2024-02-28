import { server } from "../lib/config";
import {
	getHomeBooks,
	getHomeLectures,
	getHomeArticles,
	getSomeImpLects,
	getHomeQns,
	getOptHomeQuotes,
} from "../lib/fetch";

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

export default function Home({
	lectures,
	articles,
	books,
	someLectures,
	qns,
	quotes,
	isTab,
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
			<Meta
				title=""
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত আলেম, বহু গ্রন্থ প্রণেতা ও আস সুন্নাহ ট্রাস্টের প্রতিষ্ঠাতা। তিনি ছিলেন এই উপমহাদেশের অন্যতম সেরা আলিম এবং মুজাদ্দিদ। সৌদি আরবের রাজধানী রিয়াদে অবস্থিত ইমাম মুহাম্মদ বিন সউদ ইসলামি বিশ্ববিদ্যালয় থেকে লিসান্স, মাস্টার্স ও পিএইচডি ডিগ্রি লাভ করেন।"
				url={server}
				image={`${server}/img/id/default_share.jpg`}
				type="website"
			/>
			<HomeBanner />
			<HomeLectures lectures={lectures} isSmScr={isSmScr} isTab={isTab} />
			<HomeArticles articles={articles} isSmScr={isSmScr} isTab={isTab} />
			<HomeBooks books={books} isSmScr={isSmScr} isTab={isTab} />
			<HomeQns qns={qns} isSmScr={isSmScr} isTab={isTab} />
			<SomeLectures lectures={someLectures} isSmScr={isSmScr} isTab={isTab} />
			<HomeQuoteSlider quotes={quotes} />
			<AssunnahTrust isTab={isTab} />
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
