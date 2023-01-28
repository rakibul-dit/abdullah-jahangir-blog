import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";

export default function HomeBanner() {
	return (
		<section className="h-sec h-banner h-banner-2">
			<div className="page-width">
				<div className="box h-banner-ctn">
					<div className="bannar-container">
						<div className="h-banner-text">
							<div className="h-banner-title">
								<h1 className="b-title official-web">অফিসিয়াল ওয়েবসাইট</h1>
								<h1 className="b-title">
									<span>ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.)</span>
								</h1>
								<p className="b-title">
									ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত আলেম ও
									বহু গ্রন্থ প্রণেতা ছিলেন। তাঁর পূর্ণ নাম: আবু নসর মুহাম্মদ
									আব্দুল্লাহ জাহাঙ্গীর। তাঁর পিতার নাম খোন্দকার আনোয়ারুজ্জামান
									(রাহি.)। তিনি আব্দুল্লাহ জাহাঙ্গীর নামে দেশ জুড়ে পরিচিত।
								</p>
							</div>
						</div>
						<div className="bannar-img">
							<Image
								src={"/img/abdullah-jahangir.jpg"}
								alt=""
								// layout="fill"
								width={250}
								height={250}
								objectFit="contain"
								objectPosition="center center"
								loading="eager"
								unoptimized
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
