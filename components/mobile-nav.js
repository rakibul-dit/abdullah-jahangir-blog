import Link from "next/link";
import Image from "next/image";
import Drawer from "@material-ui/core/Drawer";
import { server, youtube } from "../lib/config";

import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ClassIcon from "@mui/icons-material/Class";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { QuestionAnswer } from "@material-ui/icons";
import { CorporateFare } from "@mui/icons-material";
import { useRouter } from "next/router";
import MobileNavShare from "./share-mobile-nav";

export default function MobileNav(props) {
	const router = useRouter();
	const handleClick = (e, link) => {
		e.preventDefault();
		props.navControl(false)(e);
		router.push(link);
	};

	return (
		<Drawer
			anchor="left"
			open={props.navOpen}
			onClose={props.navControl(false)}
			className="mobile-menu-root">
			<div className="mobile-menu">
				<div className="m-menu-wrap">
					<div className="m-menu-ctn">
						<div className="m-menu-top">
							{/* <Link href="/"> */}
							<div
								className="m-menu-logo a"
								onClick={(e) => handleClick(e, "/")}>
								<Image
									src="/img/id/logo.png"
									alt=""
									width={100}
									height={100}
									objectFit="contain"
									objectPosition="left center"
									loading="eager"
									unoptimized
								/>
							</div>
							{/* </Link> */}
						</div>

						<ul className="m-menu">
							<li>
								<div className="a" onClick={(e) => handleClick(e, "/")}>
									<HomeIcon />
									হোম
								</div>
							</li>
							<li>
								<div
									className="a"
									href={`/lectures/${youtube.uploadPlaylistID}`}
									onClick={(e) =>
										handleClick(e, `/lectures/${youtube.uploadPlaylistID}`)
									}>
									<VideoLibraryIcon />
									লেকচার
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/articles"
									onClick={(e) => handleClick(e, "/articles")}>
									<LibraryBooksIcon />
									প্রবন্ধ সমূহ
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/books/all"
									onClick={(e) => handleClick(e, "/books/all")}>
									<MenuBookIcon />
									বই সমূহ
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/questions/all"
									onClick={(e) => handleClick(e, "/questions/all")}>
									<QuestionAnswer />
									প্রশ্নোত্তর
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/about"
									onClick={(e) => handleClick(e, "/about")}>
									<PersonIcon />
									জীবন বৃত্তান্ত
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/contact"
									onClick={(e) => handleClick(e, "/contact")}>
									<MailIcon />
									যোগাযোগ
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/assunnah-trust"
									onClick={(e) => handleClick(e, "/assunnah-trust")}>
									<CorporateFare /> আস-সুন্নাহ ট্রাস্ট
								</div>
							</li>
							<MobileNavShare asPath={router.asPath} title={props.title} />
						</ul>
					</div>

					{/* <div className="m-menu-bottom">
						<hr className="m-menu-hr" />

						<div className="m-menu-social">
							<a href="https://www.facebook.com/Assunnahtrust" target="_blank">
								<i className="facebook fab fa-facebook-f"></i>
							</a>
							<a href="https://www.youtube.com/sunnahtrust" target="_blank">
								<i className="youtube fab fa-youtube"></i>
							</a>
						</div>
					</div> */}
					<div className="sidenav-footer d-none">
						<p className="footer-powered-by">
							Powered By -{" "}
							<a
								className="link-r"
								href="https://deeniinfotech.com"
								target="_blank">
								Deeni Info Tech
							</a>
						</p>
					</div>

					{/*<div className="m-menu-bottom">*/}
					{/*  <p className="footer-powered-by">*/}
					{/*    Powered By -{" "}*/}
					{/*    <a*/}
					{/*      className="link-r"*/}
					{/*      href="http://deeniinfotech.com"*/}
					{/*      target="_blank"*/}
					{/*    >*/}
					{/*      Deeni Info Tech*/}
					{/*    </a>*/}
					{/*  </p>*/}
					{/*</div>*/}
				</div>
			</div>
		</Drawer>
	);
}
