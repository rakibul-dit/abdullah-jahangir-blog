import Link from "next/link";

export default function PostCardQns({ qn, isTab }) {
	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				{isTab ? (
					<Link href={`/questions/ans/${qn.id}`} passHref>
						<span className="heading-r a">{qn.qus}</span>
					</Link>
				) : (
					<Link href={`/questions/ans/${qn.id}`} className="heading-r">
						{qn.qus}
						{/* <a className="paragraph-r">{qn.qus}</a> */}
					</Link>
				)}

				{/*<span className="date-r">{postDate}</span>*/}
			</div>
		</div>
	);
}
