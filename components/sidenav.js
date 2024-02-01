import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { isActive } from "../lib/utils";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { youtube } from "../lib/config";

// import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import { createSvgIcon } from "@mui/material/utils";
import {
	CorporateFare,
	LibraryBooks,
	Mail,
	MenuBook,
	Person,
	QuestionAnswer,
	VolunteerActivism,
} from "@mui/icons-material";

const InstallMobileIcon = createSvgIcon(
	<svg
		xmlns="http://www.w3.org/2000/svg"
		enable-background="new 0 0 24 24"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#39dece">
		<g>
			<rect fill="none" height="24" width="24" />
		</g>
		<g>
			<g>
				<path d="M17,18H7V6h7V4H7V3h7V1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-5h-2V18z M17,21H7v-1h10V21z" />
				<polygon points="18,14 23,9 21.59,7.59 19,10.17 19,3 17,3 17,10.17 14.41,7.59 13,9" />
			</g>
		</g>
	</svg>
);

export default function Sidenav() {
	const router = useRouter();

	return (
		<>
			<div className="side-nav">
				{/* sn: side-nav */}
				<div className="side-nav__without_footer">
					<div className="sn__logo-wrap">
						<Link href="/">
							{/* <a> */}
							<Image
								src="/img/id/logo.png"
								alt=""
								width={"150"}
								height={"150"}
								style={{
									objectPosition: "left center",
								}}
								// objectFit="contain"
								loading="eager"
								// unoptimized
							/>
							{/* </a> */}
						</Link>
					</div>
					<div className="nav-container">
						<ul>
							<li>
								<Link
									href="/"
									className={router.pathname === "/" ? "active" : null}>
									{/* <a > */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<HomeIcon /> হোম
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href={`/lectures/${youtube.uploadPlaylistID}`}
									className={isActive("/lectures", router.asPath)}>
									{/* <a > */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<VideoLibraryIcon /> ভিডিও লেকচার
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href="/articles"
									className={isActive("/articles", router.asPath)}>
									{/* <a > */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<LibraryBooks /> প্রবন্ধ সমূহ
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href="/books/all"
									className={isActive("/books", router.asPath)}>
									{/* <a > */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<MenuBook /> বই সমূহ
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href="/questions/all"
									className={isActive("/questions", router.asPath)}>
									{/* <a > */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<QuestionAnswer /> প্রশ্নোত্তর
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className={router.pathname === "/about" ? "active" : null}>
									{/* <a > */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<Person /> জীবন বৃত্তান্ত
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className={router.pathname === "/contact" ? "active" : null}>
									{/* <a
										> */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<Mail /> যোগাযোগ
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								<Link
									href="/assunnah-trust"
									className={
										router.pathname === "/assunnah-trust" ? "active" : null
									}>
									{/* <a> */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<CorporateFare /> আস-সুন্নাহ ট্রাস্ট
									</div>
									{/* </a> */}
								</Link>
							</li>
							<li>
								{/*<Link target="_blank" href="https://assunnahtrust.org/donation/" passHref>*/}
								<a target="_blank" href="https://assunnahtrust.org/donation/">
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<VolunteerActivism /> দান করুন
									</div>
								</a>
								{/*</Link>*/}
							</li>
							<li>
								<Link
									href="/mobile-app"
									className={
										router.pathname === "/mobile-app" ? "active" : null
									}>
									{/* <a
										> */}
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<InstallMobileIcon /> মোবাইল অ্যাপ
									</div>
									{/* </a> */}
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="sidenav-footer">
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
			</div>
		</>
	);
}
