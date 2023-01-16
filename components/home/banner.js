import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";

export default function HomeBanner() {
	return (
		<section className="h-sec h-banner h-banner-2">
			<div className="page-width">
				<div className="box h-banner-ctn">
					<div className="h-banner-text">
						<div className="h-banner-title">
							<h1 className="b-title official-web">অফিসিয়াল ওয়েবসাইট</h1>
							<h1 className="b-title">
								<span>ড. মোহাম্মদ মানজুরে ইলাহী</span>
							</h1>
							<p className="b-title">
								ড. মোহাম্মদ মানজুরে ইলাহী একাধারে একজন গবেষক, শিক্ষাবিদ, ইসলামিক
								স্কলার ও লেখক। তিনি জাতীয় বিশ্ববিদ্যালয়ের সহযোগী অধ্যাপক। মদীনা
								ইসলামী বিশ্ববিদ্যালয়-এর শরী‘আহ ফ্যাকাল্টি থেকে গ্রাজুয়েশন লাভ
								করেন। তারপর একই বিশ্ববিদ্যালয় থেকে মাস্টার্স ও পিএইচডি ডিগ্রি
								লাভ করেন।
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
