import { server, youtube, constants } from "../../lib/config";
import { getAllPlaylists2, getYoutubeVideoListByUrl } from "../../lib/fetch";
import { useState, useEffect, useRef } from "react";
import Meta from "../../components/meta";
import PostCardVideo2 from "../../components/card/post-card-video2";
import Loader from "../../components/loader";
import fetcher from "../../lib/lecturesFetcher";
import useOnScreen from "../../hooks/useOnScreen";
import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import ListIcon from "@mui/icons-material/List";
import SortIcon from "@mui/icons-material/Sort";
import { useRouter } from "next/router";

const getKey = (pageIndex, previousPageData, playlistId) => {
	let pageToken = "";
	if (
		previousPageData !== null &&
		previousPageData.videoLists.videos.length < constants.DEFAULT_PAGE_LIMIT
	) {
		return null;
	}
	if (
		previousPageData !== null &&
		previousPageData.videoLists.nextPageToken !== null
	) {
		pageToken = `&pageToken=${previousPageData.videoLists.nextPageToken}`;
	}

	return `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${playlistId}&maxResults=${constants.DEFAULT_PAGE_LIMIT}${pageToken}`;
};

LectureList.title = "লেকচার সমূহ";

export default function LectureList({
	initialVideos,
	initPlaylistId,
	playlists,
	isTab,
}) {
	const ref = useRef();
	const catRef = useRef();
	const isVisible = useOnScreen(ref);
	const pageTitle = playlists.playlistsTitle[initPlaylistId];
	const router = useRouter();

	const { data, error, mutate, size, setSize, isValidating, isLoading } =
		useSWRInfinite((...args) => getKey(...args, initPlaylistId), fetcher, {
			initialData: initialVideos,
			revalidateOnMount: true,
		});

	// const datas = data ? [].concat(...data) : [];
	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined");
	const isEmpty = data?.[0]?.videos?.length === 0;
	// const isReachingEnd =
	// 	isEmpty ||
	// 	(data &&
	// 		data[data.length - 1]?.videoLists.videos.length <
	// 			constants.DEFAULT_PAGE_LIMIT);
	// let numberOfPages = data ? data[0]?.videoLists.numberOfPages : 1;
	let numberOfPages;
	try {
		if (data) {
			numberOfPages = data[0].videoLists.numberOfPages;
		}
	} catch (error) {
		console.log(error);
		numberOfPages = 1;
	}

	const isReachingEnd = isEmpty || size >= numberOfPages;
	const isRefreshing = isValidating && data && data.length === size;
	const [catOpen, setCatOpen] = useState(false);

	const handleCatOpen = async () => {
		catOpen ? setCatOpen(false) : setCatOpen(true);
	};

	const getCategorizedVideos = async (e) => {
		setCatOpen(false);
		setSize(1);
	};
	// catergory click in Tab
	const handleMobileLink = (e) => {
		setCatOpen(false);
		setSize(1);
		router.push(e.target.dataset.href);
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
				title={pageTitle}
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) এর লেকচার সমূহ"
				url={`${server}/lectures/${initPlaylistId}`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
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
									{playlists.playlists &&
										playlists.playlists.map((item) => (
											<li
												className={initPlaylistId == item.id ? "selected" : ""}
												key={item.id}>
												{isTab ? (
													<div>
														<span
															data-href={"/lectures/" + item.id}
															role="link"
															className="a"
															onClick={handleMobileLink}>
															{item.title}
														</span>
													</div>
												) : (
													<Link
														href={"/lectures/" + item.id}
														onClick={getCategorizedVideos}>
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
										data.videoLists.videos &&
										data.videoLists.videos.map((item) => {
											return (
												<div className="col col-r s12 m6 xl3" key={item.id}>
													<PostCardVideo2
														isTab={isTab}
														item={item}
														statistics={data.videoLists.videoStats}
													/>
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
		params: { pid: playlist.id },
	}));

	return {
		paths,
		fallback: "blocking",
	};
}
