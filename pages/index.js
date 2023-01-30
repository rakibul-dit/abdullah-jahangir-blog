import { server } from "../lib/config";
import {
	getHomeRecentLectures,
	getHomePapers,
	getHomeBooks,
	getHomeLectures,
	getHomeArticles,
	getHomeOrganizations,
	getSomeImpLects,
} from "../lib/fetch";

import Layout from "../components/layout";
import Meta from "../components/meta";
import HomeBanner from "../components/home/banner";
import HomePapers from "../components/home/papers";
import HomeBooks from "../components/home/books";
import HomeAbout from "../components/home/about";
import HomeLectures from "../components/home/lectures";
import HomeArticles from "../components/home/articles";
import HomeOrganization from "../components/home/organization";
import SomeLectures from "../components/home/some-lectures";

export default function Home({
	// recents,
	// papers,
	books,
	lectures,
	articles,
	someLectures,
}) {
	return (
		<Layout page="homepage">
			<Meta
				title=""
				description="ড. মোহাম্মদ মানজুরে ইলাহী একাধারে একজন গবেষক, শিক্ষাবিদ, ইসলামিক স্কলার ও লেখক, অন্যদিকে তিনি একজন দা‘ঈ ইলাল্লাহ ও স্বনামধন্য মিডিয়া ব্যক্তিত্ব। তিনি ১৯৮৮ সালে মদীনা ইসলামী বিশ্ববিদ্যালয়ের শরী‘আহ অনুষদে ভর্তি হন এবং অত্যন্ত কৃতিত্বের সাথে সেখান থেকে ব্যাচেলর, মাস্টার্স ও পিএইচডি ডিগ্রি অর্জন করেন।"
				url={server}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			<HomeBanner />
			<HomeLectures lectures={lectures} />
			<HomeArticles articles={articles} />
			<HomeBooks books={books} />
			<SomeLectures lectures={someLectures} />
			{/* <HomePapers papers={papers} /> */}
			{/* <HomeAbout /> */}
			{/* <HomeOrganization organizations={organizations} /> */}
			{/* <Newsletter /> */}
		</Layout>
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
	console.log(lectures);
	console.log(lectures.videoLists.videos[0].id);

	return {
		props: {
			// recents,
			// papers,
			books,
			lectures,
			articles,
			someLectures,
		},
		revalidate: 60,
	};
}
