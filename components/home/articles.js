import Link from "next/link";
import PostCardArticle from "../card/post-card-article";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function HomeArticles({ articles, isSmScr, isTab }) {
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
		<section className="h-sec h-articles">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>প্রবন্ধ সমূহ</span>
						{isTab ? (
							<Link href="/articles/">
								<span className="a">আরও দেখুন</span>
							</Link>
						) : (
							<Link href="/articles/">আরও দেখুন</Link>
						)}
					</h1>
					{isSmScr ? (
						<div className="row row-r">
							{articles &&
								articles.length &&
								articles.map((article, i) => (
									<div className="col col-r s12 hoverable-card" key={i}>
										<PostCardArticle article={article} isTab={isTab} />
									</div>
								))}
						</div>
					) : (
						<div className="recent-slider-outer">
							<div className="recent-slider-inner">
								<Slider className="recent-slider" {...settings}>
									{articles &&
										articles.length &&
										articles.map((article, i) => (
											<div className="col col-r hoverable-card" key={i}>
												<PostCardArticle article={article} isTab={isTab} />
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
