import Link from 'next/link'

export default function PostCardPaper({
	paper: {
		catURL = '/',
		catText = '',
		postSlug = '/',
		postTitle = '',
		postDate = ''
	}
} = {}) {
	return (
		<div className="card card-r pc-1">
			<div className="card-content">
				{/*<Link href={catURL}>*/}
				{/*	<a className="cat-r">{catText}</a>*/}
				{/*</Link>*/}
				<Link href={`/research-papers/${postSlug}`}>
					<a className="heading-r">{postTitle}</a>
				</Link>
				{/*<span className="date-r">{postDate}</span>*/}
			</div>
		</div>
	)
}