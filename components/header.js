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

export default function Header() {
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

	const showSearchModal = (event) => {
		document.querySelector(".search-modal-wrap").classList.add("active");
		document.querySelector(".search-modal").classList.add("active");
		document.body.classList.add("modal-active");

		setTimeout(function () {
			document
				.querySelector('.search-modal form.search input[type="text"]')
				.focus();
		}, 400);
	};

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
							<div>
								<p style={{ fontSize: "22px" }}>
									দান মানুষকে সত্যিকারের মুমিন করে তোলে
								</p>
							</div>
							<ul className="header-icons">
								{/* <li className="menu-divider"></li> */}
								<li>
									<a
										href="https://www.facebook.com/drmonzureelahiofficial"
										target="_blank">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/channel/UCbMys3ID_1S8D1mZuYkoG2A"
										target="_blank">
										<i className="fab fa-youtube"></i>
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
								<li className="menu-burger" onClick={toggleMobileNav(true)}>
									<i className="fas fa-bars"></i>
								</li>
								<li
									className="search-icon"
									title="search"
									onClick={showSearchModal}>
									<i className="fas fa-search"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<SearchModal />
			<MobileNav navOpen={state.mobileNavOpen} navControl={toggleMobileNav} />
		</>
	);
}
