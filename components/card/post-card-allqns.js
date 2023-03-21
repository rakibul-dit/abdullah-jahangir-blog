import Link from "next/link";

export default function PostCardAllQns({ qn, cat_slug }) {
	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				<Link href={`/questions/${cat_slug}/${qn.id}`}>
					<a>
						<p className="paragraph-r">{qn.qus}</p>
					</a>
				</Link>

				{/*<span className="date-r">{postDate}</span>*/}
			</div>
		</div>
	);
}
