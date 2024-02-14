import { server } from "../../lib/config";
import { getArticles } from "../../lib/fetch";
import Meta from "../../components/meta";
import PostCardArticle from "../../components/card/post-card-article";
import { IonContent } from "@ionic/react";
import Store from "../../store";
import * as selectors from "../../store/selectors";
import { setIsBack, setScrollPosition } from "../../store/actions";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

BlogList.title = "প্রবন্ধ সমূহ";

export default function BlogList({ articles, isTab }) {
	let isBack = Store.useState(selectors.getIsBack);
	let yp = Store.useState(selectors.getScrollPosition);

	const router = useRouter();
	const contentRef = useRef(null);

	function handleScroll(ev) {
		setScrollPosition(router.pathname, ev.detail.scrollTop);
	}

	useEffect(() => {
		if (isTab) {
			console.log("isBack: " + isBack, yp);

			if (isBack == true) {
				contentRef.current.scrollToPoint(0, yp[router.pathname]);
			} else {
				setScrollPosition(router.pathname, 0);
			}
			return () => {
				setIsBack(false);
			};
		}
	}, []);

	const contentJsx = (
		<>
			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>প্রবন্ধ সমূহ</h1>
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
										<PostCardArticle article={article} isTab={isTab} />
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
		</>
	);

	return (
		<>
			<Meta
				title="প্রবন্ধ সমূহ"
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) এর প্রবন্ধ সমূহ"
				url={`${server}/articles`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			{isTab ? (
				<IonContent
					ref={contentRef}
					scrollEvents={true}
					onIonScroll={handleScroll}>
					<div className="content">
						<div className="content_without_footer">
							<main className={`viewport`}>
								<div className="main-content">{contentJsx}</div>
							</main>
						</div>
					</div>
				</IonContent>
			) : (
				<>{contentJsx}</>
			)}
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
