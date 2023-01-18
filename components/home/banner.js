import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import PostCardRecent from "../card/post-card-recent";
import PostCardVideo from "../card/post-card-video";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function HomeBanner({ lectures }) {
	console.log(lectures);
	const settings = {
		autoplay: true,
		autoplaySpeed: 5100,
		arrows: true,
		prevArrow: <RecentPrev />,
		nextArrow: <RecentNext />,
		dots: false,
		draggable: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 510,
		infinite: true,
		cssEase: "ease",
		centerMode: true,
		mobileFirst: false,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: "130px",
					arrows: false,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerPadding: "87px",
					arrows: false,
				},
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					centerPadding: "47px",
					arrows: false,
				},
			},
		],
	};

	return (
		<section className="h-sec h-banner h-banner-2">
			<div className="page-width">
				<div className="box h-banner-ctn">
					<div className="bannar-container">
						<Slider className="recent-slider" {...settings}>
							{lectures.videoLists &&
								lectures.videoLists.videos.map((item, i) => (
									<PostCardRecent recent={item} key={i} />
								))}
						</Slider>
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
					{/* <div className="h-banner-text">
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
					</div> */}
				</div>
			</div>
		</section>
	);
}

const RecentPrev = (props) => {
	return (
		<span className="recent-prev" onClick={props.onClick}>
			<KeyboardArrowLeftIcon />
		</span>
	);
};

const RecentNext = (props) => {
	return (
		<span className="recent-next" onClick={props.onClick}>
			<KeyboardArrowRightIcon />
		</span>
	);
};
