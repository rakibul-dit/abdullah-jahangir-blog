import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { isActive } from "../lib/utils";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { youtube } from "../lib/config";
import {
	LibraryBooks,
	Mail,
	MenuBook,
	Person,
	QuestionAnswer,
} from "@material-ui/icons";
import { CorporateFare } from "@mui/icons-material";

export default function Sidenav() {
	const router = useRouter();

	return (
		<>
			<div className="side-nav">
				{/* sn: side-nav */}
				<div className="sn__logo-wrap">
					<Link href="/">
						<a>
							<Image
								src="/img/id/logo.png"
								alt=""
								width={"150"}
								height={"150"}
								// objectFit="contain"
								objectPosition="left center"
								loading="eager"
								unoptimized
							/>
						</a>
					</Link>
				</div>
				<div className="nav-container">
					<ul>
						<li>
							<Link href="/" passHref>
								<a className={router.pathname === "/" ? "active" : null}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<HomeIcon /> হোম
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href={`/lectures/${youtube.uploadPlaylistID}`} passHref>
								<a className={isActive("/lectures", router.asPath)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<VideoLibraryIcon /> লেকচার
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/articles" passHref>
								<a className={isActive("/articles", router.asPath)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<LibraryBooks /> প্রবন্ধ
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/books/all" passHref>
								<a className={isActive("/books", router.asPath)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<MenuBook /> বই
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/questions/all" passHref>
								<a className={isActive("/questions", router.asPath)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<QuestionAnswer /> প্রশ্নোত্তর
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/assunnah-trust" passHref>
								<a
									className={
										router.pathname === "/assunnah-trust" ? "active" : null
									}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<CorporateFare /> আস-সুন্নাহ ট্রাস্ট
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/about" passHref>
								<a className={router.pathname === "/about" ? "active" : null}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<Person /> জীবন বৃত্তান্ত
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<a className={router.pathname === "/contact" ? "active" : null}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<Mail /> যোগাযোগ
									</div>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
