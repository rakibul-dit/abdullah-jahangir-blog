import { server, youtube, constants } from "../../lib/config";
import {
	getAllPlaylists2,
	getAllQnaCategory,
	getAllQuestions,
	getQnCatTitle,
	getYoutubeVideoListByUrl,
	qaFetcher,
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
// import ViewListIcon from "@mui/icons-material/ViewList";
// import { CropSquareRounded } from "@material-ui/icons";
import PostCardAllQns from "../../components/card/post-card-allqns";
import Store from "../../store";
import * as selectors from "../../store/selectors";
import { setIsBack, setScrollPosition } from "../../store/actions";
import { useRouter } from "next/router";
import { IonContent } from "@ionic/react";

const getKey = (pageIndex, prevPageData, categoryId) => {
	let currentPage = pageIndex + 1;
	return JSON.stringify({ currentPage: currentPage, categoryId: categoryId });
};

QnList.title = "প্রশ্নোত্তর সমূহ";

export default function QnList({
	initialQns,
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

	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		(...args) => getKey(...args, categoryId),
		qaFetcher,
		{ initialData: initialQns, revalidateOnMount: true }
	);

	// const datas = data ? [].concat(...data) : [];
	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined");

	const isEmpty = data?.[0]?.qaItems?.length === 0;
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

	const getCategorizedQns = async (e) => {
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
													data-href="/divquestions/all"
													role="link"
													className="a"
													onClick={getCategorizedQns}>
													প্রশ্নোত্তর সমূহ
												</span>
											</div>
										) : (
											<Link href="/questions/all" onClick={getCategorizedQns}>
												প্রশ্নোত্তর সমূহ
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
															data-href={"/questions/" + item.slug}
															role="link"
															className="a"
															onClick={getCategorizedQns}>
															{item.title}
														</span>
													</div>
												) : (
													<Link
														href={"/questions/" + item.slug}
														onClick={getCategorizedQns}>
														{/*<div>প্রশ্নোত্তর: {item.id}</div>*/}
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
				className={"cat-page-ctn cat-page-lectures" + (catOpen ? " open" : "")}>
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
							{/*{isEmpty ? <p>No records found!</p> : null}*/}
							{data &&
								data.map((data) => {
									return (
										data.qaItems &&
										data.qaItems.map((item) => {
											return (
												<div className="qns col col-r s12" key={item.id}>
													<PostCardAllQns qn={item} isTab={isTab} />
												</div>
											);
										})
									);
								})}
						</div>
					</div>
				</div>
			</section>

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
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) এর প্রশ্নোত্তর সমূহ"
				url={`${server}/questions/${categoryId}`}
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

export async function getStaticProps({ params }) {
	const categoryId = params.pid;
	const currentPage = 1;

	// const videoLists = await getYoutubeVideoListByUrl(url);
	const qns = await getAllQuestions({ currentPage, categoryId });
	const categories = await getAllQnaCategory();
	const catTitle = await getQnCatTitle(categoryId);

	return {
		props: {
			initialQns: [qns],
			categoryId: categoryId,
			categories,
			catTitle,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const categories = await getAllQnaCategory();

	let paths = categories.map((item) => ({
		params: { pid: item.slug },
	}));

	paths = [{ params: { pid: "all" } }, ...paths];

	return {
		paths,
		fallback: "blocking",
	};
}
