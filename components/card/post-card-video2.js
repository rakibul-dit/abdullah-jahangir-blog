import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";
import { date, formatNumber } from "../../lib/format";

export default function PostCardVideo2({ isTab, item, statistics }) {
	const id = item.id;
	const image = item.image;
	const title = item.title;
	const publishedAt = date(item.date);
	const viewCount = statistics ? statistics[id] : "";

	return (
		<div className="card card-r pc-video">
			<div className="card-image">
				{/*TODO: Consider prefetch*/}
				{isTab ? (
					<Link href={`/lectures/watch/${id}`} passHref>
						<div className="image-r a">
							<Image
								src={
									image
										? `http://i.ytimg.com/vi/${id}/mqdefault.jpg`
										: `${server}/img/post/youtube-default.jpg`
								}
								alt=""
								fill
								style={{
									objectFit: "cover",
									objectPosition: "cebter center",
								}}
								loading="eager"
								unoptimized
							/>
						</div>
					</Link>
				) : (
					<Link href={`/lectures/watch/${id}`} className="image-r">
						<Image
							src={
								image
									? `http://i.ytimg.com/vi/${id}/mqdefault.jpg`
									: `${server}/img/post/youtube-default.jpg`
							}
							alt=""
							fill
							style={{
								objectFit: "cover",
								objectPosition: "cebter center",
							}}
							loading="eager"
							unoptimized
						/>
					</Link>
				)}
			</div>

			<div className="card-content">
				{isTab ? (
					<Link href={`/lectures/watch/${id}`} passHref>
						<span className="heading-r a">{title}</span>
					</Link>
				) : (
					<Link href={`/lectures/watch/${id}`} className="heading-r">
						{title}
					</Link>
				)}

				<div className="data-line">
					<span className="view-r">{formatNumber(viewCount)} views</span>
					<span className="date-r">{publishedAt}</span>
				</div>
			</div>
		</div>
	);
}
