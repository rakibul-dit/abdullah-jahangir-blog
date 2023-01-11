import { server } from '../../lib/config'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeBanner() {
	return (
		<section className="h-sec h-banner h-banner-2">
			<div className="page-width">
				<div className="box h-banner-ctn">
					<div className="h-banner-text">
						<div className="h-banner-title">
							<h1 className="b-title official-web">অফিসিয়াল ওয়েবসাইট</h1>
							<h1 className="b-title"><span>ড. মোহাম্মদ মানজুরে ইলাহী</span></h1>
							<p className="b-title">ড. মোহাম্মদ মানজুরে ইলাহী একাধারে একজন গবেষক, শিক্ষাবিদ, ইসলামিক স্কলার ও লেখক। তিনি জাতীয় বিশ্ববিদ্যালয়ের সহযোগী অধ্যাপক। মদীনা ইসলামী বিশ্ববিদ্যালয়-এর শরী‘আহ ফ্যাকাল্টি থেকে গ্রাজুয়েশন লাভ করেন। তারপর একই বিশ্ববিদ্যালয় থেকে মাস্টার্স ও পিএইচডি ডিগ্রি লাভ করেন।</p>
							{/*<p className="b-title">ড. মোহাম্মদ মানজুরে ইলাহী একাধারে একজন গবেষক, শিক্ষাবিদ, ইসলামিক স্কলার ও লেখক, অন্যদিকে তিনি একজন দা‘ঈ ইলাল্লাহ ও স্বনামধন্য মিডিয়া ব্যক্তিত্ব। ইসলামী গবেষণা, ইসলাম প্রচার ও টিভি/ইউটিউব চ্যানেলে আলোচনার মাধ্যমে তিনি জাতীয় ও আন্তর্জাতিকভাবে পরিচিত।</p>*/}
							{/*<p className="b-title">ড. মোহাম্মদ মানজুরে ইলাহী। তিনি জাতীয় বিশ্ববিদ্যালয়ের সহযোগী অধ্যাপক। মদীনা ইসলামী বিশ্ববিদ্যালয়-এর শরী‘আহ ফ্যাকাল্টি থেকে গ্রাজুয়েশন লাভ করেন। তারপর একই বিশ্ববিদ্যালয় থেকে মাস্টার্স ও পিএইচ ডি ডিগ্রি লাভ করেন।</p>*/}
						</div>

						<div className="h-banner-link">
							<Link href="/contact">
								<a className="btn-r">যোগাযোগ</a>
							</Link>
							<Link href="/about">
								<a className="btn-r-rev">জীবন বৃত্তান্ত</a>
							</Link>
						</div>
					</div>

					<div className="h-banner-image-wrapper">
						<div className="h-banner-image">
							<Image
								src={`${server}/img/id/profile-03.png`}
								alt=""
								layout="fill"
								objectFit="contain"
								objectPosition="right bottom"
								loading="eager"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}