import Link from "next/link";
import Image from "next/image";

const SlideCard = ({
	slide: {
		postSlug = "/", //
		imageSrc = "",
		postTitle = "",
		postDate = "",
	},
} = {}) => {
	return (
		<div className="slc-1">
			<Image
				src={imageSrc}
				alt=""
				fill
				style={{
					objectFit: "cover",
					objectPosition: "cebter center",
				}}
				loading="eager"
			/>

			<div className="slc-layer">
				<span className="date-r">অফিসিয়াল ওয়েবসাইট</span>
				<Link href={"/tafseer/" + postSlug}>
					ড. আবু বকর মুহাম্মাদ যাকারিয়া
				</Link>
			</div>
		</div>
	);
};

export default SlideCard;
