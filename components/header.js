import { server, youtube } from "../lib/config";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./search-modal";
import MobileNav from "./mobile-nav";
import { useRouter } from "next/router";
import { arrowBackSharp, menuSharp, chevronBack } from "ionicons/icons";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import TvIcon from "@mui/icons-material/TvOutlined";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import BookIcon from "@mui/icons-material/BookOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFareOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import ContactIcon from "@mui/icons-material/ContactPageOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Header({ prev_page, isTab, title }) {
	const router = useRouter();

	const [state, setState] = useState({
		mobileNavOpen: false,
	});

	// const [offset, setOffset] = useState(0)

	// useEffect(() => {
	// 	window.onscroll = () => {
	// 		setOffset(window.pageYOffset)
	// 	}
	// 	if (offset > 5) {
	// 		document.querySelector(".header").classList.add("scrolled")
	// 	} else {
	// 		document.querySelector(".header").classList.remove("scrolled")
	// 	}
	// })

	// show hide header on scroll
	const header = useRef(null);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);
	const [didMount, setDidMount] = useState(false);

	// useEffect(() => {
	// 	setDidMount(true)
	//
	// 	window.onscroll = () => {
	// 		setScrollTop(window.pageYOffset)
	// 	}
	// 	if (scrollTop > lastScrollTop) {
	// 		header.current.classList.add("scroll_up")
	// 	}
	// 	else {
	// 		header.current.classList.remove("scroll_up")
	// 	}
	// 	setLastScrollTop(scrollTop)
	//
	// 	return () => setDidMount(false)
	// }, [scrollTop])

	// const showSearchModal = (event) => {
	// 	document.querySelector(".search-modal-wrap").classList.add("active");
	// 	document.querySelector(".search-modal").classList.add("active");
	// 	document.body.classList.add("modal-active");

	// 	setTimeout(function () {
	// 		document
	// 			.querySelector('.search-modal form.search input[type="text"]')
	// 			.focus();
	// 	}, 400);
	// };

	const toggleMobileNav = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState({ mobileNavOpen: open });
	};

	return (
		<div className="header-container">
			{isTab ? (
				<ion-header>
					<ion-toolbar>
						<ion-buttons slot="start">
							{router.pathname == "/" ? (
								<div className="menu-btn">
									<ion-button onClick={toggleMobileNav(true)}>
										<ion-icon icon={menuSharp}></ion-icon>
									</ion-button>
								</div>
							) : (
								<>
									{/* <ion-back-button
										icon="chevron-back"
										default-href="/"
										onClick={goBack}></ion-back-button> */}
									<Link href={prev_page} passHref>
										<div className="back-btn">
											<ion-button>
												<ion-icon icon={arrowBackSharp}></ion-icon>
											</ion-button>
											<ion-button>
												<ion-icon icon={chevronBack}></ion-icon>
												{/* <span>Back</span> */}
											</ion-button>
										</div>
									</Link>
								</>
							)}
						</ion-buttons>
						<ion-title>
							<h3 style={{ color: "#106690" }}>{title}</h3>
						</ion-title>
					</ion-toolbar>
				</ion-header>
			) : (
				<header className="header header-1" ref={header}>
					<div className="page-width w-full">
						<div className="box">
							<div className="header-ctn">
								<div className="mobile-header-title d-none">
									<Link href="/">
										<a>
											<h3>{title}</h3>
										</a>
									</Link>
								</div>

								<div className="ticker_wrap">
									<div className="ticker_container">
										<div className="ticker">
											<p className="ticker_item">
												ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) উম্মাহর সম্পদ।
											</p>
											<p className="ticker_item">
												এখানে আমরা শাইখ এর সকল আলোচনা, বই, প্রবন্ধ, প্রশ্নোত্তর
												এবং আরও অন্যান্য বিষয় শ্রেণিবিন্যাস অনুযায়ী পাবো ইন শা
												আল্লাহ।
											</p>
											<p className="ticker_item">
												আমরা সকলে শেয়ার করে ছড়িয়ে দেয়ার চেষ্টা করি।
											</p>
										</div>
										<div className="ticker">
											<p className="ticker_item">
												ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) উম্মাহর সম্পদ।
											</p>
											<p className="ticker_item">
												এখানে আমরা শাইখ এর সকল আলোচনা, বই, প্রবন্ধ, প্রশ্নোত্তর
												এবং আরও অন্যান্য বিষয় শ্রেণিবিন্যাস অনুযায়ী পাবো ইন শা
												আল্লাহ।
											</p>
											<p className="ticker_item">
												আমরা সকলে শেয়ার করে ছড়িয়ে দেয়ার চেষ্টা করি।
											</p>
										</div>
									</div>
								</div>
								{/* <ul className="header-icons"> */}
								<ul className="s-profile-social">
									{/* <li className="menu-divider"></li> */}
									<li>
										<a
											href="https://www.facebook.com/Dr.KhandakerAbdullahJahangir.Official"
											target="_blank">
											<i className="facebook fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.youtube.com/sunnahtrust"
											target="_blank">
											<i className="youtube fab fa-youtube"></i>
										</a>
									</li>
									{/* <li className="menu-divider"></li> */}
									{/* <li
									className="search-icon"
									title="search"
									onClick={showSearchModal}>
									<i className="fas fa-search"></i>
								</li> */}
								</ul>

								<ul className="mobile-icons">
									{router.pathname == "/" ? (
										<li className="menu-burger" onClick={toggleMobileNav(true)}>
											<i className="fas fa-bars"></i>
										</li>
									) : (
										// <li className="mobile-back">
										// 	<Link href={prev_page ? prev_page : "/"}>
										// 		<a>
										// 			<ArrowBackIcon />
										// 		</a>
										// 	</Link>
										// </li>

										<li className="mobile-back">
											<Link href={prev_page}>
												<ion-buttons slot="start">
													<ion-button>
														<ion-icon icon={arrowBackSharp}></ion-icon>
													</ion-button>
												</ion-buttons>
											</Link>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
				</header>
			)}
			{/* <SearchModal /> */}
			<MobileNav navOpen={state.mobileNavOpen} navControl={toggleMobileNav} />
		</div>
	);
}
