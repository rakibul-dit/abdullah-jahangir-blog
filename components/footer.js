import Link from "next/link";
import { youtube } from "../lib/config";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="page-width">
				<div className="box">
					{/* <div className="footer-ctn"> */}
					<div className="pc-footer">
						<p className="footer-copyright">&copy; ২০২৩, সর্বস্বত্ব সংরক্ষিত</p>
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

					{/* <div className="foot-col">
							<h3 className="title-s">আরও জানুন</h3>
							<div className="foot-link">
								<Link href="/about">
									<a className="link-r">জীবন বৃত্তান্ত</a>
								</Link>
								<Link href="/contact">
									<a className="link-r">যোগাযোগ</a>
								</Link>
							</div>
						</div> */}

					{/* <div className="foot-col">
							<h3 className="title-s">প্রয়োজনীয় লিংক</h3>
							<div className="foot-link">
								<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
									<a className="link-r">লেকচার</a>
								</Link>
								<Link href="/books/all">
									<a className="link-r">বই সমূহ</a>
								</Link>
							</div>
						</div> */}

					{/* <div className="foot-col">
							<h3 className="title-s">সামাজিক যোগাযোগ</h3>
							<div className="foot-link">
								<a
									className="link-r"
									href="https://www.facebook.com/Assunnahtrust"
									target="_blank">
									<i className="facebook fab fa-facebook-f"></i>ফেইসবুক
								</a>
								<a
									className="link-r"
									href="https://www.youtube.com/sunnahtrust"
									target="_blank">
									<i className="youtube fab fa-youtube"></i>ইউটিউব
								</a>
							</div>
						</div> */}
					{/* </div> */}

					{/* <div className="mobile-footer">
						<div className="row row-r">
							<div className="col col-r s12 l12">
								<p className="footer-copyright center-align">
									&copy; ২০২৩, সর্বস্বত্ব সংরক্ষিত
								</p>
							</div>
						</div>

						<div className="row row-r">
							<div className="col col-r s12 l12">
								<p className="footer-powered-by center-align">
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
					</div> */}
				</div>
			</div>
		</footer>
	);
}
