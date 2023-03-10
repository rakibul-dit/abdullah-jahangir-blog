import { server } from "../../../lib/config";
import Link from "next/link";
import Layout from "../../../components/layout";
import Meta from "../../../components/meta";
import parse from "html-react-parser";
import Share from "../../../components/share";
import { getAnsById, getQnaByLimit } from "../../../lib/fetch";
import DetailTopBack from "../../../components/detail-top-back";

export default function BlogDetail({ ans }) {
	return (
		<Layout prev_page="/questions/all">
			<Meta
				title=""
				description=""
				url=""
				image={`${server}/img/id/default_share.png`}
				type="article"
			/>
			<div className="qna">
				<section className="blog-detail-top">
					<div className="page-width">
						<div className="box">
							<DetailTopBack link="/questions/all" />
							{/* <h2 className="qna-header">{ans[0].category}</h2> */}
							{/*<span className="date-r">{detail.postDate}</span>*/}
						</div>
					</div>
				</section>

				<section className="blog-detail-ctn">
					<div className="page-width">
						<div className="box">
							<div className="blog-area">
								<div className="blog-detail">
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
	);
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const ans = await getAnsById(id);

	return {
		props: {
			ans,
		},
	};
}

export async function getStaticPaths() {
	const ans = await getQnaByLimit();

	const paths = ans.map((item) => ({
		params: { id: item.id.toString() },
	}));

	return {
		paths,
		fallback: "blocking",
	};
}
