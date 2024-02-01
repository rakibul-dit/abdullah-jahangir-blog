import Link from "next/link";
import Image from "next/image";

export default function PostCard({
	post: {
		postSlug = "/", //
		imageSrc = "",
		postTitle = "",
		postDate = "",
	},
} = {}) {
	return (
		<div className="card card-r pc-4">
			<div className="card-image">
				<Link href={`/tafseer/${postSlug}`} className="image-r">
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
				</Link>

				<div className="card-content">
					<Link href={`/tafseer/${postSlug}`} className="heading-r">
						{postTitle}
					</Link>

					<span className="date-r">{postDate}</span>
				</div>
			</div>
		</div>
	);
}
