import Slider from 'react-slick'
import PostCardRecent from '../card/post-card-recent'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function HomeRecent({ recents }) {
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
		cssEase: 'ease',
		centerMode: true,
		mobileFirst: false,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: '130px',
					arrows: false
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerPadding: '87px',
					arrows: false
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					centerPadding: '47px',
					arrows: false
				}
			}
		]
	}

	return (
		<section className="h-sec h-recent">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>সাম্প্রতিক</span>
					</h1>

					<div className="recent-slider-outer">
						<div className="recent-slider-inner">
							<Slider
								className="recent-slider"
								{...settings}
							>
							{
								recents.videoLists.videos && recents.videoLists.videos.map((recent, i) =>
									<PostCardRecent key={i} recent={recent} />
								)
							}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const RecentPrev = (props) => {
	return (
		<span
			className="recent-prev"
			onClick={props.onClick}
		>
			<KeyboardArrowLeftIcon />
		</span>
	)
}

const RecentNext = (props) => {
	return (
		<span
			className="recent-next"
			onClick={props.onClick}
		>
			<KeyboardArrowRightIcon />
		</span>
	)
}