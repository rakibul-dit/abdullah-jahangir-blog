import { server } from '../../lib/config'
import Image from 'next/image'

export default function HomeAbout() {
	return (
		<section className="h-sec h-about">
			<div className="page-width">
				<div className="box">
					<div className="h-about-ctn">
						<div className="h-about-image">
							{/* <img src="/img/id/profile-02.png" alt="" /> */}
							<Image
								src={`${server}/img/id/profile-02.png`}
								alt=""
								layout="fill"
								objectFit="contain"
								objectPosition="left bottom"
								loading="eager"
							/>
						</div>
						<div className="h-about-text">
							<h1>আল্লাহর জন্য ইখলাস</h1>
							<p>“আপনি যদি ‘আল্লাহর জন্য ইখলাস’ মিস করে ফেলেন, তাহলে শির্কে পতিত হবেন। আর যদি ‘আল্লাহর ইবাদতের’ ক্ষেত্রে সুন্নাহর অনুসরণ মিস করে ফেলেন, তাহলে বিদ‘আতে লিপ্ত হবেন।”</p>
							<span>ড. মোহাম্মদ মানজুরে ইলাহী</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}