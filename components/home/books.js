import Link from "next/link";
import BookCard from "../card/post-card-book";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function HomeBooks({ books, isSmScr, isTab }) {
	const settings2 = {
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: <RecentPrev />,
		nextArrow: <RecentNext />,
		dots: false,
		draggable: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 500,
		infinite: true,
		cssEase: "ease",
		centerMode: true,
		mobileFirst: false,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	};

	return (
		<section className="h-sec h-books">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>বই সমূহ</span>
						{isTab ? (
							<Link href="/books/all">
								<span className="a">আরও দেখুন</span>
							</Link>
						) : (
							<Link href="/books/all">
								<a>আরও দেখুন</a>
							</Link>
						)}
					</h1>

					{isSmScr ? (
						<div className="row row-r">
							{books &&
								books.length &&
								books.map((book, i) => (
									<div
										className="col col-r s6 m6 l4 xl3 hoverable-card"
										key={i}>
										<BookCard book={book} isTab={isTab} />
									</div>
								))}
						</div>
					) : (
						<>
							{/* <div className="recent-slider-outer">
								<div className="recent-slider-inner">
									<Slider className="recent-slider" {...settings}>
										{books &&
											books.length &&
											books.map((book, i) => (
												<div className="col col-r s6 m6 l4 xl3" key={i}>
													<BookCard book={book} />
												</div>
											))}
									</Slider>
								</div>
							</div> */}
							<div className="recent-slider-outer">
								<div className="recent-slider-inner">
									<Slider className="recent-slider" {...settings2}>
										{books &&
											books.length &&
											books.map((book, i) => (
												<div
													className="col col-r s6 m6 l4 xl3 hoverable-card"
													key={i}>
													<BookCard book={book} isTab={isTab} />
												</div>
											))}
									</Slider>
								</div>
							</div>
						</>
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
