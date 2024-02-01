import Link from "next/link";

export default function PostCardAllQns({ qn, isTab }) {
	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				{isTab ? (
					<Link href={`/questions/ans/${qn.id}`} passHref>
						<div className="a">
							<p className="paragraph-r">প্রশ্নোত্তর: {qn.id}</p>
							<p className="paragraph-r">{qn.qus}</p>
						</div>
					</Link>
				) : (
					<Link href={`/questions/ans/${qn.id}`}>
						{/* <a> */}
						<p className="paragraph-r">প্রশ্নোত্তর: {qn.id}</p>
						<p className="paragraph-r">{qn.qus}</p>
						{/* </a> */}
					</Link>
				)}

				{/*<span className="date-r">{postDate}</span>*/}
			</div>
		</div>
	);
}
