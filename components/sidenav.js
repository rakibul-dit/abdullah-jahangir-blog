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
	console.log(router);
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
								objectFit="contain"
								// objectPosition="center center"
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
								<a className={isActive("/", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<HomeIcon /> Home
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href={`/lectures/${youtube.uploadPlaylistID}`} passHref>
								<a
									className={isActive(
										`/lectures/${youtube.uploadPlaylistID}`,
										router.asPath
									)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<VideoLibraryIcon /> Lectures
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/" passHref>
								<a className={isActive("/articles", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<LibraryBooks /> Articles
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/books" passHref>
								<a className={isActive("/books", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<MenuBook /> Books
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/question-ans" passHref>
								<a className={isActive("/question-ans", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<QuestionAnswer /> Qustion-Ans
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/about" passHref>
								<a className={isActive("/about", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<Person /> About
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/assunnah-trust" passHref>
								<a className={isActive("/assunnah-trust", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<CorporateFare /> AsSunnah Trust
									</div>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<a className={isActive("/contact", router.pathname)}>
									<div className="indicator"></div>
									<div className="wrap d-flex align-center com-transition">
										<Mail /> Contact
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
