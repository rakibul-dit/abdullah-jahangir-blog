import { server } from "../lib/config";
// import Image from "next/image";
import Meta from "../components/meta";
import { IonContent } from "@ionic/react";
import AboutCtn from "../components/pages/About";

About.title = "জীবন বৃত্তান্ত";

export default function About({ isTab }) {
	return (
		<>
			<Meta
				title="জীবন বৃত্তান্ত"
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত আলেম, বহু গ্রন্থ প্রণেতা ও আস সুন্নাহ ট্রাস্টের প্রতিষ্ঠাতা। তিনি ছিলেন এই উপমহাদেশের অন্যতম সেরা আলিম এবং মুজাদ্দিদ। সৌদি আরবের রাজধানী রিয়াদে অবস্থিত ইমাম মুহাম্মদ বিন সউদ ইসলামি বিশ্ববিদ্যালয় থেকে লিসান্স, মাস্টার্স ও পিএইচডি ডিগ্রি লাভ করেন।"
				url={`${server}/about`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			{isTab ? (
				<IonContent>
					<div className="content">
						<div className="content_without_footer">
							<main className={`viewport`}>
								<div className="main-content">
									<AboutCtn />
								</div>
							</main>
						</div>
					</div>
				</IonContent>
			) : (
				<AboutCtn />
			)}
		</>
	);
}
