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
									ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত আলেম,
									বহু গ্রন্থ প্রণেতা ও আস সুন্নাহ ট্রাস্টের প্রতিষ্ঠাতা। তিনি
									ছিলেন এই উপমহাদেশের অন্যতম সেরা আলিম এবং মুজাদ্দিদ। সৌদি আরবের
									রাজধানী রিয়াদে অবস্থিত ইমাম মুহাম্মদ বিন সউদ ইসলামি
									বিশ্ববিদ্যালয় থেকে লিসান্স, মাস্টার্স ও পিএইচডি ডিগ্রি লাভ
									করেন।
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
								style={{
									objectFit: "contain",
									objectPosition: "cebter center",
								}}
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
