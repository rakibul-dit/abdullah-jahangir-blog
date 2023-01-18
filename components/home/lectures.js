import Slider from "react-slick";
import PostCardRecent from "../card/post-card-recent";
import PostCardVideo from "../card/post-card-video2";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function HomeLectures({ lectures }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: <RecentPrev />,
		nextArrow: <RecentNext />,
		dots: false,
		draggable: true,
		slidesToShow: 3,
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
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
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
		<section className="h-sec h-recent">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>লেকচার সমগ্র</span>
					</h1>

					<div className="recent-slider-outer">
						<div className="recent-slider-inner">
							<Slider className="recent-slider" {...settings}>
								{lectures.videoLists &&
									lectures.videoLists.videos.map((item) => (
										<div className="col col-r s12 m6 xl3" key={item.id}>
											<PostCardVideo
												item={item}
												statistics={lectures.videoLists.videoStats}
											/>
										</div>
									))}
							</Slider>
						</div>
					</div>
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
