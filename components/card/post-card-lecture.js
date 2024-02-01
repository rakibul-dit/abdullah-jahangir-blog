import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";

export default function PostCardLecture({
	lecture: {
		postID = "/",
		imageSrc = "",
		postTitle = "",
		postExcerpt = "",
		postDate = "",
	},
} = {}) {
	return (
		<div className="card card-r pc-0">
			<div className="card-image">
				<Link href={`/lectures/${postID}`} className="image-r">
					{/* <a > */}
					{/* <img src={imageSrc} alt="" /> */}
					<Image
						src={server + imageSrc}
						alt=""
						fill
						style={{
							objectFit: "cover",
							objectPosition: "cebter center",
						}}
						loading="eager"
						unoptimized
					/>
					{/* </a> */}
				</Link>
			</div>

			<div className="card-content">
				<Link href={`/lectures/${postID}`} className="heading-r">
					{postTitle}
				</Link>

				<p className="paragraph-r">{postExcerpt}</p>
				<span className="date-r">{postDate}</span>
			</div>
		</div>
	);
}
