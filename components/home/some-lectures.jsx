import Slider from "react-slick";
import PostCardRecent from "../card/post-card-recent";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function SomeLectures({ lectures, isTab }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: <RecentPrev />,
		nextArrow: <RecentNext />,
		dots: false,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		infinite: true,
		cssEase: "ease",
		centerMode: true,
		mobileFirst: false,
		centerPadding: "0px",
		// responsive: [
		// 	{
		// 		breakpoint: 1200,
		// 		settings: {
		// 			slidesToShow: 3,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 900,
		// 		settings: {
		// 			slidesToShow: 2,
		// 		},
		// 	},
		// ],
	};

	return (
		<>
			<section className="h-sec h3-quote h-some-lecs h-banner-2">
				<div className="page-width">
					<div className="box h-banner-ctn">
						<div className="row row-r">
							<div className="col col-r s12 m6 l6">
								<div className="h3-quote-left">
									<h2>শাইখ এর কয়েকটি</h2>
									<h2>গুরুত্বপূর্ণ আলোচনা</h2>
								</div>
							</div>
							{/* mobile */}
							<div className="mobile">
								{lectures.videoLists.videos &&
									lectures.videoLists.videos.map((recent, i) => (
										<div className="col col-r s12 hoverable-card" key={i}>
											<PostCardRecent key={i} recent={recent} isTab={isTab} />
										</div>
									))}
							</div>
							{/* slider */}
							<div className="col col-r s12 m6 l6 h3-quote-right__wrap">
								<div className="h3-quote-right">
									<div className="recent-slider-outer">
										<div className="recent-slider-inner">
											<Slider className="recent-slider" {...settings}>
												{lectures.videoLists.videos &&
													lectures.videoLists.videos.map((recent, i) => (
														<PostCardRecent
															key={i}
															recent={recent}
															isTab={isTab}
														/>
													))}
											</Slider>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="h-sec h-recent">
				<div className="page-width">
					<div className="box">
						<h1 className="title-r">
							<span>কিছু গুরুত্বপূর্ণ আলোচনা</span>
						</h1>

						{isSmScr ? (
							<div className="row row-r">
								{lectures.videoLists.videos &&
									lectures.videoLists.videos.map((recent, i) => (
										<div className="col col-r s12" key={i}>
											<PostCardRecent key={i} recent={recent} />
										</div>
									))}
							</div>
						) : (
							<div className="recent-slider-outer">
								<div className="recent-slider-inner">
									<Slider className="recent-slider" {...settings}>
										{lectures.videoLists.videos &&
											lectures.videoLists.videos.map((recent, i) => (
												<PostCardRecent key={i} recent={recent} />
											))}
									</Slider>
								</div>
							</div>
						)}
					</div>
				</div>
			</section> */}
		</>
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
