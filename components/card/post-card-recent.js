import { server } from "../../lib/config";
import { date as dateFormat } from "../../lib/format";
import Link from "next/link";
import Image from "next/image";

export default function PostCardRecent({
	recent: {
		image = "",
		//catURL = "/",
		//catText = "",
		id = "/",
		title = "",
		date = "",
	},
	isTab,
} = {}) {
	return (
		<div className="recent-item">
			{isTab ? (
				<Link href={`/lectures/watch/${id}`}>
					<div className="recent-ctn">
						{/* <img src={image} alt="" /> */}
						<Image
							//src={image}
							src={
								image && image !== ""
									? `http://i.ytimg.com/vi/${id}/mqdefault.jpg`
									: `${server}/img/post/youtube-default.jpg`
							}
							alt=""
							fill
							style={{
								objectFit: "fill",
								objectPosition: "cebter center",
							}}
							loading="eager"
							unoptimized
						/>
						<div className="recent-text">
							<span className="heading-r a">{title}</span>
							{/*<span className="date-r">{dateFormat(date)}</span>*/}
						</div>
					</div>
				</Link>
			) : (
				<Link href={`/lectures/watch/${id}`}>
					<div className="recent-ctn">
						{/* <img src={image} alt="" /> */}
						<Image
							//src={image}
							src={
								image && image !== ""
									? `http://i.ytimg.com/vi/${id}/mqdefault.jpg`
									: `${server}/img/post/youtube-default.jpg`
							}
							alt=""
							fill
							style={{
								objectFit: "fill",
								objectPosition: "cebter center",
							}}
							loading="eager"
							unoptimized
						/>
						<div className="recent-text">
							<span className="heading-r a">{title}</span>
							{/* <a className="heading-r">{title}</a> */}
							{/*<span className="date-r">{dateFormat(date)}</span>*/}
						</div>
					</div>
				</Link>
			)}
		</div>
	);
}
