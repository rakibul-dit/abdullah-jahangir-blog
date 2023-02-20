import { server, youtube } from "../lib/config";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./search-modal";
import MobileNav from "./mobile-nav";
import { useRouter } from "next/router";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import TvIcon from "@mui/icons-material/TvOutlined";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import BookIcon from "@mui/icons-material/BookOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFareOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import ContactIcon from "@mui/icons-material/ContactPageOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Header({ prev_page }) {
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
		<>
			<header className="header header-1" ref={header}>
				<div className="page-width w-full">
					<div className="box">
						<div className="header-ctn">
							<div className="mobile-header-title d-none">
								<h3>আব্দুল্লাহ জাহাঙ্গীর</h3>
							</div>
							{/* <Link href="/">
								<a className="header-logo d-none">
									<Image
										src={`${server}/img/id/logo.png`}
										alt=""
										width={72}
										height={72}
										// objectFit="contain"
										objectPosition="left center"
										loading="eager"
									/>
								</a>
							</Link> */}
							<div className="ticker_wrap">
								<div className="ticker_container">
									<div className="ticker">
										<p className="ticker_item">
											দান মানুষকে সত্যিকারের মুমিন করে তোলে।
										</p>
										<p className="ticker_item">
											পড় তোমার প্রভুর নামে যিনি তোমাকে সৃষ্টি করেছেন।
										</p>
										<p className="ticker_item">
											নিশ্চয়ই আমি মানুষকে কষ্ট ও পরিশ্রমনির্ভর করে সৃষ্টি করেছি।
											নিশ্চয়ই আমি মানুষকে কষ্ট ও পরিশ্রমনির্ভর করে সৃষ্টি করেছি।
										</p>
									</div>
									<div className="ticker">
										<p className="ticker_item">
											দান মানুষকে সত্যিকারের মুমিন করে তোলে।
										</p>
										<p className="ticker_item">
											পড় তোমার প্রভুর নামে যিনি তোমাকে সৃষ্টি করেছেন।
										</p>
										<p className="ticker_item">
											নিশ্চয়ই আমি মানুষকে কষ্ট ও পরিশ্রমনির্ভর করে সৃষ্টি করেছি।
											নিশ্চয়ই আমি মানুষকে কষ্ট ও পরিশ্রমনির্ভর করে সৃষ্টি করেছি।
										</p>
									</div>
								</div>
							</div>
							{/* <ul className="header-icons"> */}
							<ul className="s-profile-social">
								{/* <li className="menu-divider"></li> */}
								<li>
									<a
										href="https://www.facebook.com/Assunnahtrust"
										target="_blank">
										<i className="facebook fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/sunnahtrust" target="_blank">
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
									<li className="mobile-back">
										<Link href={prev_page ? prev_page : "/"}>
											<a>
												<ArrowBackIcon />
											</a>
										</Link>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</header>

			{/* <SearchModal /> */}
			<MobileNav navOpen={state.mobileNavOpen} navControl={toggleMobileNav} />
		</>
	);
}
