import Link from 'next/link'
import PostCardPaper from '../card/post-card-paper'

export default function HomePapers({ papers }) {
	return (
		<section className="h-sec h-papers">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>রিসার্চ পেপারস</span>
						<Link href="/research-papers/"><a>আরও দেখুন</a></Link>
					</h1>
					<div className="row row-r">
					{
						papers && papers.length && papers.map((paper, i) =>
							<div className="col col-r s12 xl4" key={i}>
								<PostCardPaper paper={paper} />
							</div>
						)
					}
					</div>
				</div>
			</div>
		</section>
	)
}