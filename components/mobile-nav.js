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

export default function MobileNav(props) {
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
							<Link href="/">
								<a className="m-menu-logo">
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
								</a>
							</Link>
						</div>

						<ul className="m-menu">
							<li>
								<Link href="/">
									<a>
										<HomeIcon />
										হোম
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
									<a>
										<VideoLibraryIcon />
										লেকচার
									</a>
								</Link>
							</li>
							<li>
								<Link href="/articles">
									<a>
										<LibraryBooksIcon />
										প্রবন্ধ
									</a>
								</Link>
							</li>
							<li>
								<Link href="/books/all">
									<a>
										<MenuBookIcon />
										বই
									</a>
								</Link>
							</li>
							<li>
								<Link href="/questions/all">
									<a>
										<QuestionAnswer />
										প্রশ্নোত্তর
									</a>
								</Link>
							</li>
							<li>
								<Link href="/assunnah-trust" passHref>
									<a>
										<CorporateFare /> আস-সুন্নাহ ট্রাস্ট
									</a>
								</Link>
							</li>
							<li>
								<Link href="/about">
									<a>
										<PersonIcon />
										জীবন বৃত্তান্ত
									</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a>
										<MailIcon />
										যোগাযোগ
									</a>
								</Link>
							</li>
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
