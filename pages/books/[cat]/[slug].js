import { server } from "../../../lib/config";
import { getBooks, getBookDetails, getRelatedBooks } from "../../../lib/fetch";
import Image from "next/image";
import Layout from "../../../components/layout";
import Meta from "../../../components/meta";
import Share from "../../../components/share";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DetailTopBack from "../../../components/detail-top-back";
import Header from "../../../components/header";

BookDetail.title = "বই সমূহ";

export default function BookDetail({ detail, books, catSlug }) {
	return (
		<>
			<Layout>
				<Meta
					title={detail.bookName}
					description={`ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) এর বই সমূহ - ${detail.bookDesc}`}
					url={`${server}/books/${catSlug}/${detail.bookSlug}`}
					image={server + detail.imageSrc}
					type="article"
				/>

				<section className="blog-detail-ctn">
					<div className="page-width">
						<div className="box">
							<DetailTopBack link={`/books/${catSlug}`} />
							<div className="blog-area">
								<div className="blog-detail book-detail">
									<div className="row margin-bottom-0">
										<div className="col s12 l5">
											<div className="book-detail-left-wrapper">
												<div className="book-detail-left">
													<div className="book-detail-left-inner">
														<Image
															src={detail.imageSrc}
															alt=""
															layout="fill"
															objectFit="cover"
															objectPosition="center center"
															loading="eager"
															unoptimized
														/>
													</div>
												</div>
											</div>
										</div>

										<div className="col s12 l7">
											<div className="book-detail-right">
												<h2 className="book-title">{detail.bookName}</h2>

												<div className="book-writer-area">
													<p>
														লেখক: <i>{detail.writer}</i>
													</p>
													{detail.translator && (
														<p>
															অনুবাদ: <i>{detail.translator}</i>
														</p>
													)}
													{/*<p>সম্পাদনা: <i>{detail.editor}</i></p>*/}
												</div>

												<div className="book-action">
													<div className="book-btn">
														{detail.link != "" && (
															<a
																className="btn-r read-more"
																target="_blank"
																href={`=${detail.link}`}>
																<MenuBookIcon />
																<span>পড়ুন</span>
															</a>
														)}

														{detail.purchaseLink != "" && (
															<a
																className="btn-r read-more"
																target="_blank"
																href={`${detail.purchaseLink}`}>
																<MenuBookIcon />
																<span>ক্রয় করতে</span>
															</a>
														)}

														{detail.pdf != "" && (
															<a
																className="btn-r read-more"
																target="_blank"
																href={`${server}/pdf-viewer/web/viewer.html?file=${detail.pdf}`}>
																<MenuBookIcon />
																<span>পড়ুন</span>
															</a>
														)}

														{detail.link == "" &&
															detail.purchaseLink == "" &&
															detail.pdf == "" && (
																<span className="no-link">
																	{detail.linkNotAvailableText}...
																</span>
															)}
													</div>

													<div className="blog-share book-share">
														<Share
															urlWeb={`books/${catSlug}/${detail.bookSlug}`}
															urlMobile={detail.bookSlug}
															title={detail.bookName}
														/>
													</div>
												</div>

												<p className="book-detail-desc">{detail.bookDesc}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*<section className="blog-page-related">*/}
				{/*	<div className="page-width">*/}
				{/*		<div className="box">*/}
				{/*			<h1 className="title-r">*/}
				{/*				<span>সম্পর্কিত পোস্ট</span>*/}
				{/*			</h1>*/}

				{/*			<div className="row row-r">*/}
				{/*			{*/}
				{/*				books && books.length && books.map(books =>*/}
				{/*					<div className="col col-r s12 l6 xl4" key={books.id}>*/}
				{/*						<BookCard books={books} />*/}
				{/*					</div>*/}
				{/*				)*/}
				{/*			}*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
			</Layout>
		</>
	);
}

export async function getStaticProps({ params }) {
	//const resRelated = await fetch(`${server}/api/books/related`)
	//const books = await resRelated.json()

	const slug = params.slug;
	const catSlug = params.cat;

	const detail = await getBookDetails(slug);
	const books = await getRelatedBooks();

	return {
		props: {
			detail,
			books,
			catSlug,
			prev_page: `/books/${catSlug}`,
		},
	};
}

export async function getStaticPaths() {
	//const res = await fetch(`${server}/api/books/listpage`)
	//const books = await res.json()

	const books = await getBooks();

	let paths = [];
	books.forEach((book) => {
		book.categorySlug.forEach((cat) => {
			paths.push({
				params: { cat: cat, slug: book.bookSlug },
			});
		});
	});
	console.log(paths);
	// const paths = books.map((book) => ({
	// 	params: { cat: books.categorySlug[0], slug: book.bookSlug },
	// }));

	return {
		paths,
		fallback: false,
	};
}
