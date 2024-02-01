import Slider from "react-slick";
import PostCardRecent from "../card/post-card-recent";
import PostCardVideo from "../card/post-card-video2";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import { youtube } from "../../lib/config";

export default function HomeLectures({ lectures, isSmScr, isTab }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: <RecentPrev />,
		nextArrow: <RecentNext />,
		dots: false,
		draggable: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		infinite: true,
		cssEase: "ease",
		centerMode: true,
		mobileFirst: false,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
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
					autoplay: false,
					slidesToShow: 1,
					centerPadding: "47px",
					arrows: false,
				},
			},
		],
	};

	return (
		<section className="h-sec h-recent">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>ভিডিও লেকচার</span>
						{isTab ? (
							<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
								<span className="a">আরও দেখুন</span>
							</Link>
						) : (
							<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
								আরও দেখুন
							</Link>
						)}
					</h1>

					{isSmScr ? (
						<div className="row row-r">
							{lectures.videoLists &&
								lectures.videoLists.videos.map((item) => (
									<div
										className="col col-r s12 m6 xl3 hoverable-card"
										key={item.id}>
										<PostCardVideo
											isTab={isTab}
											item={item}
											statistics={lectures.videoLists.videoStats}
										/>
									</div>
								))}
						</div>
					) : (
						<div className="recent-slider-outer">
							<div className="recent-slider-inner">
								<Slider className="recent-slider" {...settings}>
									{lectures.videoLists &&
										lectures.videoLists.videos.map((item) => (
											<div
												className="col col-r s12 m6 xl3 hoverable-card"
												key={item.id}>
												<PostCardVideo
													isTab={isTab}
													item={item}
													statistics={lectures.videoLists.videoStats}
												/>
											</div>
										))}
								</Slider>
							</div>
						</div>
					)}
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
