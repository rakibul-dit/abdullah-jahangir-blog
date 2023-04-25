import { server } from "../lib/config";
import Layout from "../components/layout";
import Meta from "../components/meta";
import Header from "../components/header";
import Image from "next/image";

AssunnahTrust.title = "মোবাইল অ্যাপ";

export default function AssunnahTrust() {
	return (
		<>
			<Layout>
				<Meta
					title="মোবাইল অ্যাপ"
					description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) শাইখ এর মোবাইল অ্যাপ ইনস্টল করুন।"
					url={`${server}/mobile-app`}
					image={`${server}/img/id/default_share.png`}
					type="website"
				/>

				<section className="blog-detail-ctn assunnah-trust">
					<div className="page-width">
						<div className="box">
							<div className="blog-area">
								<div className="blog-detail">
									<h2>ইনস্টল মোবাইল অ্যাপ</h2>
									<p>
										ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) শাইখ এর মোবাইল অ্যাপ <a href="#android">Android</a> ও <a href="#iphone">iPhone</a> এ ইনস্টল করার প্রক্রিয়া।
									</p>

									<h2 id="android">Android</h2>
									<ul className="mobile-app-des">
										<li>
											<p>
												Google Chrome ব্রাউজার ওপেন করুন এবং ভিজিট করুন <span>www.AbdullahJahangir.com</span>।
												উপরে ডান পাশে "three dot" আইকনে ক্লিক করুন। (নীচে "Add Dr. Abdullah Jahangir to Home screen" ক্লিক করলে শেষ স্টেপে চলে যাবেন।)
											</p>
											<div className="row row-r">
												<div className="col col-r s6 m4 l3 xl3 xxl2">
													<img loading="lazy" src="/img/app/install/Android_1.png"
														 style={{width: `100%`, height:`auto`}} />
												</div>
											</div>
										</li>
										<li>
											<p>
												নীচে স্ক্রোল করুন এবং ক্লিক করুন "Install app"। (যদি "Install app" দেখতে না পান তাহলে কয়েক সেকেন্ড অপেক্ষা করে পুনরায় চেষ্টা করুন।)
											</p>
											<div className="row row-r">
												<div className="col col-r s6 m4 l3 xl3 xxl2">
													<img loading="lazy" src="/img/app/install/Android_2.png"
														 style={{width: `100%`, height:`auto`}} />
												</div>
												{/*<div className="col col-r s6 m4 l3 xl3 xxl2">*/}
												{/*	<img loading="lazy" src="/img/app/install/Android_2_2.png"*/}
												{/*		 style={{width: `100%`, height:`auto`}} />*/}
												{/*</div>*/}
											</div>
										</li>
										<li>
											<p>
												"Install" ক্লিক করে কনফার্ম করুন।
											</p>
											<div className="row row-r">
												<div className="col col-r s6 m4 l3 xl3 xxl2">
													<img loading="lazy" src="/img/app/install/Android_3.png"
														 style={{width: `100%`, height:`auto`}} />
												</div>
											</div>
										</li>
									</ul>

									<h2 id="iphone">iPhone</h2>
									<ul className="mobile-app-des">
										<li>
											<p>
												Safari ব্রাউজার ওপেন করুন এবং ভিজিট করুন <span>www.AbdullahJahangir.com</span>।
												নীচে মাঝখানে "Share" আইকনে ক্লিক করুন।
											</p>
											<div className="row row-r">
												<div className="col col-r s6 m4 l3 xl3 xxl2">
													<img loading="lazy" src="/img/app/install/iPhone_1.png"
														 style={{width: `100%`, height:`auto`}} />
												</div>
											</div>
										</li>
										<li>
											<p>
												নীচে স্ক্রোল করুন এবং ক্লিক করুন "Add to Home Screen"।
											</p>
											<div className="row row-r">
												<div className="col col-r s6 m4 l3 xl3 xxl2">
													<img loading="lazy" src="/img/app/install/iPhone_2.png"
														 style={{width: `100%`, height:`auto`}} />
												</div>
											</div>
										</li>
										<li>
											<p>
												"Add" ক্লিক করে কনফার্ম করুন।
											</p>
											<div className="row row-r">
												<div className="col col-r s6 m4 l3 xl3 xxl2">
													<img loading="lazy" src="/img/app/install/iPhone_3.png"
														 style={{width: `100%`, height:`auto`}} />
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
