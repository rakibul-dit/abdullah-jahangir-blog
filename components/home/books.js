import Link from "next/link";
import BookCard from "../card/post-card-book";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";

export default function HomeBooks({ books, isTab }) {
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

	const router = useRouter();
	const handleMobileLink = (e) => {
		router.push(e.target.dataset.href);
	};

	return (
		<section className="h-sec h-books">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>বই সমূহ</span>
						{isTab ? (
							<div>
								<span
									className="a"
									data-href="/books/all"
									onClick={handleMobileLink}>
									আরও দেখুন
								</span>
							</div>
						) : (
							<Link href="/books/all">আরও দেখুন</Link>
						)}
					</h1>

					{/* mobile */}
					<div className="row row-r mobile">
						{books &&
							books.length &&
							books.map((book, i) => (
								<div className="col col-r s6 m6 l4 xl3 hoverable-card" key={i}>
									<BookCard book={book} isTab={isTab} />
								</div>
							))}
					</div>

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
						{/* slider */}
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
