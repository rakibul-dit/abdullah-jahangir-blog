import { server } from "../../lib/config";
import { getArticles } from "../../lib/fetch";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import PostCardArticle from "../../components/card/post-card-article";
import Pagination from "../../components/pagination";
import Header from "../../components/header";

// BlogList.title = "প্রবন্ধ সমূহ";

export default function BlogList({ articles }) {
	return (
		<>
			<Header title="প্রবন্ধ সমূহ" />
			<Layout>
				<Meta
					title="প্রবন্ধ সমূহ"
					description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) এর প্রবন্ধ সমূহ"
					url={`${server}/articles`}
					image={`${server}/img/id/default_share.png`}
					type="website"
				/>

				<section className="cat-page-top">
					<div className="page-width">
						<div className="box">
							<h1>
								প্রবন্ধ সমূহ
								{/*<span>৯</span>*/}
							</h1>
							{/*<p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।</p>*/}
						</div>
					</div>
				</section>

				<section className="cat-page-articles">
					<div className="page-width">
						<div className="box">
							<div className="row row-r">
								{articles &&
									articles.length &&
									articles.map((article) => (
										<div className="col col-r s12 xl4" key={article.id}>
											<PostCardArticle article={article} />
										</div>
									))}
							</div>
						</div>
					</div>
				</section>

				{/*<Pagination />*/}
			</Layout>
		</>
	);
}

export async function getStaticProps(context) {
	//const res = await fetch(`${server}/api/articles/listpage`)
	//const articles = await res.json()

	const articles = await getArticles();

	return {
		props: {
			articles,
		},
	};
}
