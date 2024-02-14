import Link from "next/link";
import { useRouter } from "next/router";

export default function PostCardQns({ qn, isTab }) {
	const router = useRouter();
	const handleMobileLink = (e) => {
		router.push(e.target.dataset.href);
	};

	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				{isTab ? (
					<div>
						<span
							className="heading-r a"
							data-href={`/questions/ans/${qn.id}`}
							onClick={handleMobileLink}>
							{qn.qus}
						</span>
					</div>
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
