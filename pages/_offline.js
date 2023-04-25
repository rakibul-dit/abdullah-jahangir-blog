import { server } from "../lib/config";
import Layout from "../components/layout";
import Meta from "../components/meta";

Offline.title = "Offline";

export default function Offline() {
	return (
		<>
			<Layout>
				<Meta
					title="ইন্টারনেট সংযোগ বিচ্ছিন্ন "
					description="আব্দুল্লাহ জাহাঙ্গীর-আস সুন্নাহ ট্রাস্টের প্রতিষ্ঠাতা ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর রাহিমাহুল্লাহ, যিনি ছিলেন এই উপমহাদেশের অন্যতম সেরা আলিম এবং মুজাদ্দিদ।"
					url={`${server}/about`}
					image={`${server}/img/id/default_share.png`}
					type="website"
				/>
				<section className="about-page-ctn">
					<div className="page-width">
						<div className="box">
							<div className="blog-area">
								<div className="about-top">
									<h1>ইন্টারনেট সংযোগ বিচ্ছিন্ন!</h1>
								</div>

								<div className="row">
									<div className="col s12 m12 l12">
										<div className="about-left">
											<div className="about-text">
												<p>
													দয়া করে ইন্টারনেট সংযোগ করুন।
												</p>
											</div>
										</div>
									</div>

								</div>

							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
