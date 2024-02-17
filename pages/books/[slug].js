import {
	bookFetcher,
	getAllBookCategories,
	getBookCatTitle,
	getBooksByCategory,
} from "../../lib/fetch";
import { useState, useEffect, useRef } from "react";
import Meta from "../../components/meta";
// import PostCardVideo2 from "../../components/card/post-card-video2";
import Loader from "../../components/loader";
// import fetcher from "../../lib/lecturesFetcher";
import useOnScreen from "../../hooks/useOnScreen";
import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import SortIcon from "@mui/icons-material/Sort";
// import PostCardAllQns from "../../components/card/post-card-allqns";
import BookCard from "../../components/card/post-card-book";
import Store from "../../store";
import * as selectors from "../../store/selectors";
import { setIsBack, setScrollPosition } from "../../store/actions";
import { useRouter } from "next/router";
import { IonContent } from "@ionic/react";

const getKey = (pageIndex, prevPageData, categoryId) => {
	let currentPage = pageIndex + 1;
	return JSON.stringify({ currentPage: currentPage, categoryId: categoryId });
};

BookList.title = "বই সমূহ";

export default function BookList({
	initialBooks,
	categoryId,
	categories,
	catTitle,
	isTab,
}) {
	const ref = useRef();
	const catRef = useRef();
	const isVisible = useOnScreen(ref);
	// const pageTitle = categories[categoryId].title;
	const pageTitle = catTitle;
	// const isTab = Store.useState((s) => s.isTab);

	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		(...args) => getKey(...args, categoryId),
		bookFetcher,
		{ initialData: initialBooks, revalidateOnMount: true }
	);

	const datas = data ? [].concat(...data) : [];
	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined");

	const isEmpty = data?.[0]?.bookItems?.length === 0;
	// const isReachingEnd =
	// 	isEmpty || (data && data[data.length - 1]?.length < 1000);
	// const numberOfPages = data?.length !== 0 ? data[0].numberOfPages : 0;

	let numberOfPages;
	try {
		if (data) {
			numberOfPages = data[0].numberOfPages;
		}
	} catch (error) {
		console.log(error);
		numberOfPages = 1;
	}

	const isReachingEnd = isEmpty || size >= numberOfPages;

	// const isRefreshing = isValidating && data && data.length === size;

	const [catOpen, setCatOpen] = useState(false);

	const handleCatOpen = async () => {
		catOpen ? setCatOpen(false) : setCatOpen(true);
	};

	const getCategorizedBooks = async (e) => {
		e.preventDefault();
		setCatOpen(false);
		setSize(1);
		if (isTab) {
			router.push(e.target.dataset.href);
			contentRef.current.scrollToTop();
		} else router.push(e.target.href);
	};

	useEffect(() => {
		let handler = (e) => {
			if (catRef.current != null && !catRef.current.contains(e.target)) {
				setCatOpen(false);
			}
		};
		document.body.addEventListener("mousedown", handler);

		if (isVisible && !isReachingEnd) {
			setSize(size + 1);
		}
	}, [isVisible]);

	let isBack = Store.useState(selectors.getIsBack);
	let yp = Store.useState(selectors.getScrollPosition);

	const router = useRouter();
	const contentRef = useRef(null);

	function handleScroll(ev) {
		setScrollPosition(router.pathname, ev.detail.scrollTop);
	}

	useEffect(() => {
		if (isTab) {
			// console.log("isBack: " + isBack, yp);

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
			<div className="books">
				<section className="cat-page-top cat-page-top-2">
					<div className="page-width">
						<div className="box">
							<h1 ref={catRef}>
								<i className="select-tag-icon" onClick={handleCatOpen}>
									<SortIcon />
								</i>{" "}
								{pageTitle}
								<div className={"select-tag-list" + (catOpen ? " open" : "")}>
									<ul>
										<li className={categoryId == "all" ? "selected" : ""}>
											{isTab ? (
												<div>
													<span
														data-href="/books/all"
														role="link"
														className="a"
														onClick={getCategorizedBooks}>
														বই সমূহ
													</span>
												</div>
											) : (
												<Link href="/books/all" onClick={getCategorizedBooks}>
													বই সমূহ
												</Link>
											)}
										</li>
										{categories &&
											categories.map((item) => (
												<li
													className={categoryId == item.slug ? "selected" : ""}
													key={item.id}>
													{isTab ? (
														<div>
															<span
																data-href={"/books/" + item.slug}
																role="link"
																className="a"
																onClick={getCategorizedBooks}>
																{item.title}
															</span>
														</div>
													) : (
														<Link
															href={"/books/" + item.slug}
															onClick={getCategorizedBooks}>
															{item.title}
														</Link>
													)}
												</li>
											))}
									</ul>
								</div>
							</h1>

							{/*<p>*/}
							{/*  আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক*/}
							{/*  যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।*/}
							{/*</p>*/}
						</div>
					</div>
				</section>

				<section
					className={
						"cat-page-ctn cat-page-lectures" + (catOpen ? " open" : "")
					}>
					<div className="page-width">
						<div className="box">
							<div className="row row-r">
								{/*{isEmpty ? <p>No records found!</p> : null}*/}
								{datas &&
									datas.map((data) => {
										return (
											data.bookItems &&
											data.bookItems.map((item) => (
												<div
													className="col col-r s6 m4 l3 xl3 xxl2"
													key={item.id}>
													<BookCard book={item} isTab={isTab} />
												</div>
											))
										);
										// return <p>{data.currentPage}</p>;
									})}
							</div>
						</div>
					</div>
				</section>
			</div>

			<div ref={ref}>
				{isLoadingMore && !isReachingEnd ? (
					<div className={"loader"}>
						<Loader />
					</div>
				) : (
					""
				)}
			</div>

			{isReachingEnd ? (
				""
			) : (
				<div style={{ margin: "20px 0px" }}>
					<center>
						<button onClick={() => setSize(size + 1)}>আরও দেখুন</button>
					</center>
				</div>
			)}
		</>
	);

	return (
		<>
			<Meta
				title={pageTitle}
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) এর বই সমূহ"
				url={`/books/${categoryId}`}
				image={`/img/id/default_share.png`}
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

export async function getStaticProps({ params }) {
	const categoryId = params.slug;
	const currentPage = 1;

	// const videoLists = await getYoutubeVideoListByUrl(url);
	const books = await getBooksByCategory({ currentPage, categoryId });
	const categories = await getAllBookCategories();
	const catTitle = await getBookCatTitle(categoryId);

	return {
		props: {
			initialBooks: [books],
			categoryId: categoryId,
			categories,
			catTitle,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const categories = await getAllBookCategories();

	let paths = categories.map((item) => ({
		params: { slug: item.slug },
	}));

	paths = [{ params: { slug: "all" } }, ...paths];

	return {
		paths,
		fallback: "blocking",
	};
}
