import Link from "next/link";
import { useRouter } from "next/router";

export default function PostCardArticle({
	article: { postSlug = "/", postTitle = "", postExcerpt = "", postDate = "" },
	isTab,
} = {}) {
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
							data-href={`/articles/${postSlug}`}
							onClick={handleMobileLink}>
							{postTitle}
						</span>
					</div>
				) : (
					<Link href={`/articles/${postSlug}`} className="heading-r">
						{postTitle}
					</Link>
				)}

				<p className="paragraph-r">{postExcerpt}</p>
				{/*<span className="date-r">{postDate}</span>*/}
			</div>
		</div>
	);
}
