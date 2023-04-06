import Link from "next/link";
import PostCardArticle from "../card/post-card-article";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PostCardQns from "../card/post-card-qns";

export default function HomeQns({ qns, isSmScr, isTab }) {
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
		],
	};

	return (
		<section className="h-sec h-qns">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>প্রশ্নোত্তর</span>
						{isTab ? (
							<Link href="/questions/all">
								<span className="a">আরও দেখুন</span>
							</Link>
						) : (
							<Link href="/questions/all">
								<a>আরও দেখুন</a>
							</Link>
						)}
					</h1>
					{isSmScr ? (
						<div className="row row-r">
							{qns &&
								qns.length &&
								qns.map((qn, i) => (
									<div className="col col-r s12 hoverable-card" key={i}>
										<PostCardQns qn={qn} isTab={isTab} />
									</div>
								))}
						</div>
					) : (
						<div className="recent-slider-outer">
							<div className="recent-slider-inner">
								<Slider className="recent-slider" {...settings}>
									{qns &&
										qns.length &&
										qns.map((qn, i) => (
											<div className="col col-r hoverable-card" key={i}>
												<PostCardQns qn={qn} isTab={isTab} />
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
