import Link from "next/link";

export default function PostCardArticle({
	article: { postSlug = "/", postTitle = "", postExcerpt = "", postDate = "" },
	isTab,
} = {}) {
	return (
		<div className="card card-r pc-0">
			<div className="card-content">
				{isTab ? (
					<Link href={`/articles/${postSlug}`} passHref>
						<span className="heading-r a">{postTitle}</span>
					</Link>
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
