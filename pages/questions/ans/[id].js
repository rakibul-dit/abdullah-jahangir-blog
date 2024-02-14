import { server } from "../../../lib/config";
// import Link from "next/link";
import Meta from "../../../components/meta";
// import parse from "html-react-parser";
import Share from "../../../components/share";
import { getAnsById, getQnaByLimit } from "../../../lib/fetch";
import DetailTopBack from "../../../components/detail-top-back";
import { IonContent } from "@ionic/react";

QnA.title = "প্রশ্নোত্তর";

export default function QnA({ ans, isTab }) {
	const contentJsx = (
		<>
			<div className="qna">
				<section className="blog-detail-ctn">
					<div className="page-width">
						<div className="box">
							<DetailTopBack link="/questions/all" />
							<div className="blog-area">
								<div className="blog-detail">
									<h3 className="qna-qn">প্রশ্নোত্তর: {ans[0].id}</h3> <br />
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
		</>
	);
	return (
		<>
			<Meta
				title={ans[0].qus}
				description={ans[0].ans}
				url={`${server}/questions/ans/${ans[0].id}`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			{isTab ? (
				<IonContent>
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

export async function getStaticProps({ params }) {
	const id = params.id;
	const ans = await getAnsById(id);

	return {
		props: {
			ans,
			prev_page: "/questions/all",
		},
	};
}

export async function getStaticPaths() {
	const ans = await getQnaByLimit();

	const paths = ans.map((item) => ({
		params: {
			id: item.id.toString(),
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
}
