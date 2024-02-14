import Link from "next/link";
import { useRouter } from "next/router";

export default function PostCardAllQns({ qn, isTab }) {
	const router = useRouter();
	const handleMobileLink = (e) => {
		router.push(e.target.dataset.href);
	};

	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				{isTab ? (
					<div>
						<div
							className="a"
							data-href={`/questions/ans/${qn.id}`}
							onClick={handleMobileLink}>
							<p className="paragraph-r" data-href={`/questions/ans/${qn.id}`}>
								প্রশ্নোত্তর: {qn.id}
							</p>
							<p className="paragraph-r" data-href={`/questions/ans/${qn.id}`}>
								{qn.qus}
							</p>
						</div>
					</div>
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
