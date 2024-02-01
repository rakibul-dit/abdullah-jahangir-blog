import { youtube } from "../lib/config";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TvIcon from "@mui/icons-material/TvOutlined";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import BookIcon from "@mui/icons-material/BookOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFareOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import ContactIcon from "@mui/icons-material/ContactPageOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import MobileNav from "./mobile-nav";

export default function Header({ playlists }) {
	// show hide header on scroll
	const header = useRef(null);
	const [scrollTop, setScrollTop] = useState(0);
	const [didMount, setDidMount] = useState(false);

	const num = Math.ceil(playlists.length / 3);
	const firstList = playlists.slice(0, num);
	const secondList = playlists.slice(num, num * 2);
	const thirdList = playlists.slice(num * 2, playlists.length);

	useEffect(() => {
		setDidMount(true);

		window.onscroll = () => {
			setScrollTop(window.pageYOffset);
		};
		if (scrollTop > 20) {
			header.current.classList.add("scroll_up");
		} else {
			header.current.classList.remove("scroll_up");
		}
		//setLastScrollTop(scrollTop);

		return () => setDidMount(false);
	}, [scrollTop]);

	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const toggleMobileNav = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setMobileNavOpen(open);
	};

	return (
		<>
			<header className="header header-3" ref={header}>
				<div className="page-width">
					<div className="box">
						<div className="header-ctn">
							<Link href="/" className="header-logo">
								<Image
									src="/img/dr-saifullah-logo.png"
									alt=""
									width={100}
									height={100}
									style={{
										objectFit: "contain",
										objectPosition: "left center",
									}}
									loading="eager"
								/>
							</Link>

							<ul className="main-menu">
								<li>
									<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
										<span className="main-menu-icon">
											<TvIcon />
										</span>
										লেকচার
										<span className="main-menu-icon icon-more">
											<ExpandMoreIcon />
										</span>
									</Link>

									<div className="sub-menu">
										<div className="sub-menu-wrap scrollbar">
											<ul>
												{firstList &&
													firstList.map((playlist) => (
														<li key={playlist.id}>
															<Link href={`/lectures/${playlist.id}`}>
																{playlist.title}
															</Link>
														</li>
													))}
											</ul>

											<ul>
												{secondList &&
													secondList.map((playlist) => (
														<li key={playlist.id}>
															<Link href={`/lectures/${playlist.id}`}>
																{playlist.title}
															</Link>
														</li>
													))}
											</ul>

											<ul>
												{thirdList &&
													thirdList.map((playlist) => (
														<li key={playlist.id}>
															<Link href={`/lectures/${playlist.id}`}>
																playlist.title}
															</Link>
														</li>
													))}
											</ul>
										</div>
									</div>
								</li>

								<li>
									<Link href="/books/">
										<span className="main-menu-icon">
											<BookIcon />
										</span>
										বই
									</Link>
								</li>
								<li>
									<Link href="/research-papers/">
										<span className="main-menu-icon">
											<DescriptionIcon />
										</span>
										পেপারস
									</Link>
								</li>
								<li>
									<Link href="/articles/">
										<span className="main-menu-icon">
											<ArticleIcon />
										</span>
										আর্টিকেলস
									</Link>
								</li>
								<li>
									<Link href="/organizations/">
										<span className="main-menu-icon">
											<CorporateFareIcon />
										</span>
										অর্গানাইজেশন
									</Link>
								</li>
								<li>
									<Link href="/about">
										<span className="main-menu-icon">
											<InfoIcon />
										</span>
										<span>আমার সম্পর্কে</span>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<span className="main-menu-icon">
											<ContactIcon />
										</span>
										যোগাযোগ
									</Link>
								</li>
							</ul>

							<ul className="mobile-icons">
								<li className="menu-burger" onClick={toggleMobileNav(true)}>
									<i className="fas fa-bars"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<MobileNav navOpen={mobileNavOpen} navControl={toggleMobileNav} />
		</>
	);
}
