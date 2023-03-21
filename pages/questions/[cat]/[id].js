import { server } from "../../../lib/config";
import Link from "next/link";
import Layout from "../../../components/layout";
import Meta from "../../../components/meta";
import parse from "html-react-parser";
import Share from "../../../components/share";
import { getAnsById, getQnaByLimit } from "../../../lib/fetch";
import DetailTopBack from "../../../components/detail-top-back";
import Header from "../../../components/header";

// QnA.title = "প্রশ্নোত্তর";
// QnA.prev_page = `/questions/${cat_slug}`;

export default function QnA({ ans, cat_slug }) {
	return (
		<>
			<Header title="লেকচার সমূহ" prev_page={`/questions/${cat_slug}`} />
			<Layout>
				<Meta
					title={ans[0].qus}
					description={ans[0].ans}
					url={`${server}/questions/ans/${ans[0].id}`}
					image={`${server}/img/id/default_share.png`}
					type="website"
				/>
				<div className="qna">
					<section className="blog-detail-ctn">
						<div className="page-width">
							<div className="box">
								<DetailTopBack link={`/questions/${cat_slug}`} />
								<div className="blog-area">
									<div className="blog-detail">
										{/*<div>প্রশ্নোত্তর: {ans[0].id}</div>*/}
										<h3 className="qna-qn">{ans[0].qus}</h3>
									</div>
									<hr className="qna-hr" />
									<div className="blog-detail">
										<p>{ans[0].ans}</p>
									</div>

									<div className="blog-action">
										{/*<div className="blog-tag">*/}
										{/*	<h2>ট্যাগ</h2>*/}

										{/*	<Link href="/articless/">*/}
										{/*		<a>#কুরআন</a>*/}
										{/*	</Link>*/}
										{/*	<Link href="/articless/">*/}
										{/*		<a>#হাদিস</a>*/}
										{/*	</Link>*/}
										{/*</div>*/}

										<div className="blog-share">
											<Share
												urlWeb={`/questions/ans/${ans[0].id}`}
												urlMobile={`/questions/ans/${ans[0].id}`}
												title="প্রশ্নোত্তর"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const cat_slug = params.cat;
	console.log(params);
	const ans = await getAnsById(id);

	return {
		props: {
			ans,
			cat_slug,
		},
	};
}

export async function getStaticPaths() {
	const ans = await getQnaByLimit();

	const paths = ans.map((item) => ({
		params: {
			cat: item.category_slug ? item.category_slug : "all",
			id: item.id.toString(),
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
}
