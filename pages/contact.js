import Meta from "../components/meta";
import ContactContent from "../components/pages/ContactContent";
import { server } from "../lib/config";

Contact.title = "যোগাযোগ";

export default function Contact() {
	return (
		<>
			<Meta
				title="যোগাযোগ"
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত আলেম, বহু গ্রন্থ প্রণেতা ও আস সুন্নাহ ট্রাস্টের প্রতিষ্ঠাতা। তিনি ছিলেন এই উপমহাদেশের অন্যতম সেরা আলিম এবং মুজাদ্দিদ। সৌদি আরবের রাজধানী রিয়াদে অবস্থিত ইমাম মুহাম্মদ বিন সউদ ইসলামি বিশ্ববিদ্যালয় থেকে লিসান্স, মাস্টার্স ও পিএইচডি ডিগ্রি লাভ করেন।"
				url={`${server}/contact`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			<ContactContent />
		</>
	);
}

// const SponsorSlider = () => {
// 	const settings = {
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		arrows: false,
// 		//prevArrow: $('.sponsor-prev'),
// 		//nextArrow: $('.sponsor-next'),
// 		dots: false,
// 		draggable: true,
// 		//focusOnSelect: false,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		speed: 500,
// 		infinite: true,
// 		cssEase: 'ease',
// 		//mobileFirst: false,
// 	}

// 	return (
// 		<Slider
// 			className="sponsor-slider"
// 			{...settings}
// 		>
// 			<div className="sponsor-item">
// 				<a href="#" target="_blank">
// 					<img src="/img/sponsor/sponsor-01.jpg" alt="" />
// 				</a>
// 			</div>
// 			<div className="sponsor-item">
// 				<a href="#" target="_blank">
// 					<img src="/img/sponsor/sponsor-01.jpg" alt="" />
// 				</a>
// 			</div>
// 		</Slider>
// 	)
// }
