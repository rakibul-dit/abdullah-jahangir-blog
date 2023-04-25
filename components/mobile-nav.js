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
import { VolunteerActivism } from "@mui/icons-material";
// import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import { useRouter } from "next/router";
import MobileNavShare from "./share-mobile-nav";
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";

const InstallMobileIcon = createSvgIcon(
	<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#39dece"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17,18H7V6h7V4H7V3h7V1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-5h-2V18z M17,21H7v-1h10V21z"/><polygon points="18,14 23,9 21.59,7.59 19,10.17 19,3 17,3 17,10.17 14.41,7.59 13,9"/></g></g></svg>
);

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
									ভিডিও লেকচার
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
							<li>
								<div
									className="a"
									href="https://assunnahtrust.org/donation/"
									onClick={(e) => handleClick(e, "https://assunnahtrust.org/donation/")}>
									<VolunteerActivism /> দান করুন
								</div>
							</li>
							<li>
								<div
									className="a"
									href="/mobile-app"
									onClick={(e) => handleClick(e, "/mobile-app")}>
									<InstallMobileIcon /> মোবাইল অ্যাপ
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
