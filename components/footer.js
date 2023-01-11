import { server } from '../lib/config'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="footer">
			<div className="page-width">
				<div className="box">
					<div className="footer-ctn">
						<div className="foot-col">
							<Link href="/">
								<a className="footer-logo">
									<Image
										src={`${server}/img/id/logo_english.png`}
										alt=""
										width={148}
										height={32}
										objectFit="contain"
										objectPosition="left top"
										loading="eager"
									/>
								</a>
							</Link>
							<p className="footer-copyright">&copy; ২০২১, সর্বস্বত্ব সংরক্ষিত</p>
							<p className="footer-powered-by">
								Powered By - <a className="link-r" href="http://deeniinfotech.com" target="_blank">Deeni Info Tech</a>
							</p>
						</div>

						<div className="foot-col">
							<h3 className="title-s">আরও জানুন</h3>
							<div className="foot-link">
								<Link href="/about">
									<a className="link-r">জীবন বৃত্তান্ত</a>
								</Link>
								<Link href="/contact">
									<a className="link-r">যোগাযোগ</a>
								</Link>
							</div>
						</div>

						<div className="foot-col">
							<h3 className="title-s">প্রয়োজনীয় লিংক</h3>
							<div className="foot-link">
								<Link href="/lectures/UUbMys3ID_1S8D1mZuYkoG2A">
									<a className="link-r">লেকচার</a>
								</Link>
								<Link href="/books">
									<a className="link-r">বই সমূহ</a>
								</Link>
							</div>
						</div>

						<div className="foot-col">
							<h3 className="title-s">সামাজিক যোগাযোগ</h3>
							<div className="foot-link">
								<a className="link-r" href="https://www.facebook.com/drmonzureelahiofficial" target="_blank">
									<i className="facebook fab fa-facebook-f"></i>ফেইসবুক
								</a>
								<a className="link-r" href="https://www.youtube.com/channel/UCbMys3ID_1S8D1mZuYkoG2A" target="_blank">
									<i className="youtube fab fa-youtube"></i>ইউটিউব
								</a>
							</div>
						</div>
					</div>

					<div className="mobile-footer">
						<div className="row row-r">
							<div className="col col-r s5 l5">
								<Link href="/">
									<a className="footer-logo">
										<Image
											src={`${server}/img/id/logo_english.png`}
											alt=""
											width={120}
											height={26}
											objectFit="contain"
											objectPosition="left top"
											loading="eager"
										/>
									</a>
								</Link>
							</div>
							<div className="col col-r s7 l7">
								<p className="footer-copyright right-align">&copy; ২০২১, সর্বস্বত্ব সংরক্ষিত</p>
							</div>
						</div>

						<div className="row row-r">
							<div className="col col-r s12 l12">
								<p className="footer-powered-by center-align">
									Powered By - <a className="link-r" href="http://deeniinfotech.com" target="_blank">Deeni Info Tech</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}