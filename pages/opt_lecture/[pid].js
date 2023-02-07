import { youtube, constants } from "../../lib/config";
import { getAllPlaylists2, getYoutubeVideoListByUrl } from "../../lib/fetch";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Meta from "../../components/meta";
import Header from "../../components/header2";
import Footer from "../../components/footer";

import PostCardVideo2 from "../../components/card/post-card-video2";
import Loader from "../../components/loader";

import fetcher from "../../lib/lecturesFetcher";
import useOnScreen from "../../hooks/useOnScreen";
import { useSWRInfinite } from "swr";

const getKey = (pageIndex, previousPageData, playlistId) => {
	let pageToken = "";
	if (
		previousPageData !== null &&
		previousPageData.videoLists.nextPageToken !== null
	) {
		pageToken = `&pageToken=${previousPageData.videoLists.nextPageToken}`;
	}

	return `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${playlistId}&maxResults=${constants.DEFAULT_PAGE_LIMIT}${pageToken}`;
};

export default function LectureList({
	initialVideos,
	initPlaylistId,
	playlists,
}) {
	const ref = useRef();
	const catRef = useRef();
	const isVisible = useOnScreen(ref);
	const pageTitle = playlists.playlistsTitle[initPlaylistId];

	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		(...args) => getKey(...args, initPlaylistId),
		fetcher,
		{ initialData: initialVideos, revalidateOnMount: true }
	);

	const datas = data ? [].concat(...data) : [];
	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined");
	// const isEmpty = data?.[0]?.length === 0
	const numberOfPages =
		data?.[0]?.length !== 0 ? data[0].videoLists.numberOfPages : 0;
	const isReachingEnd = size === numberOfPages;
	const isRefreshing = isValidating && data && data.length === size;

	const [catOpen, setCatOpen] = useState(false);

	const handleCatOpen = async () => {
		catOpen ? setCatOpen(false) : setCatOpen(true);
	};

	const getCategorizedVideos = async (id, pageTitle) => {
		setCatOpen(false);
		setSize(1);
	};

	useEffect(() => {
		let handler = (e) => {
			if (catRef.current != null && !catRef.current.contains(e.target)) {
				setCatOpen(false);
			}
		};
		document.body.addEventListener("mousedown", handler);

		if (isVisible && !isReachingEnd && !isRefreshing) {
			setSize(size + 1);
		}
	}, [isVisible, isRefreshing]);

	return (
		<>
			<Meta
				title={`${pageTitle} | Dr. Monzur-E-Elahi`}
				description={`${pageTitle} | Dr. Monzur-E-Elahi`}
				url="www.monzureelahi.com"
				image="/img/id/logo.png"
				type="website"
			/>

			<Header />

			<main className="viewport opt_lecture_list">
				<section className="cat-page-top cat-page-top-2 opt_lecture_cat_page_top">
					<div className="page-width">
						<div className="box">
							<h1 ref={catRef}>
								<i
									className="material-icons select-tag-icon"
									onClick={handleCatOpen}>
									list
								</i>{" "}
								{pageTitle}
								<div className={"select-tag-list" + (catOpen ? " open" : "")}>
									<ul>
										{playlists.playlists &&
											playlists.playlists.map((item) => (
												<li
													className={
														initPlaylistId == item.id ? "selected" : ""
													}
													key={item.id}
													onClick={() =>
														getCategorizedVideos(item.id, item.title)
													}>
													<Link href={"/opt_lecture/" + item.id}>
														<a>{item.title}</a>
													</Link>
												</li>
											))}
									</ul>
								</div>
							</h1>
						</div>
					</div>
				</section>

				<section
					className={
						"cat-page-ctn cat-page-lectures" + (catOpen ? " open" : "")
					}>
					<div className="page-width">
						<div className="box">
							<div className="opt_lecture_page">
								<div className="opt_lecture_left">
									{/* category list */}
									<div className="opt_lecture_left_cat_list">
										<ul>
											{playlists.playlists &&
												playlists.playlists.map((item) => (
													<li
														className={
															initPlaylistId == item.id ? "selected" : ""
														}
														key={item.id}
														onClick={() =>
															getCategorizedVideos(item.id, item.title)
														}>
														<Link href={"/opt_lecture/" + item.id}>
															<a>{item.title}</a>
														</Link>
													</li>
												))}
										</ul>
									</div>
								</div>

								<div className="opt_lecture_right">
									<div className="opt_lecture_title">{pageTitle}</div>

									<div className="row row-r">
										{/*{isEmpty ? <p>No records found!</p> : null}*/}
										{datas &&
											datas.map((data) => {
												return (
													data.videoLists.videos &&
													data.videoLists.videos.map((item) => {
														return (
															<div
																className="col col-r s12 m12 l6 xl4"
																key={item.id}>
																<PostCardVideo2
																	item={item}
																	statistics={data.videoLists.videoStats}
																/>
															</div>
														);
													})
												);
											})}
									</div>

									<div ref={ref}>
										{isLoadingMore ? (
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
												<button onClick={() => setSize(size + 1)}>
													আরও দেখুন
												</button>
											</center>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	const playlistId = params.pid;
	const url = `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${playlistId}&maxResults=${constants.DEFAULT_PAGE_LIMIT}`;
	const videoLists = await getYoutubeVideoListByUrl(url);
	const playlists = await getAllPlaylists2();

	return {
		props: {
			initialVideos: [videoLists],
			initPlaylistId: playlistId,
			playlists,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const playlists = await getAllPlaylists2();

	const paths = playlists.playlists.map((playlist) => ({
		// params: { pid: playlist.id },
		params: { pid: "1" },
	}));

	return {
		paths,
		fallback: "blocking",
	};
}
