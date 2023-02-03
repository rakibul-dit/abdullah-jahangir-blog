import Link from "next/link";

export default function PostCardQns({ qn }) {
	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				<Link href={`/qustions/${qn.cat}/${qn.id}`}>
					<a className="heading-r">{qn.qus}</a>
					{/* <a className="paragraph-r">{qn.qus}</a> */}
				</Link>

				{/*<span className="date-r">{postDate}</span>*/}
			</div>
		</div>
	);
}
