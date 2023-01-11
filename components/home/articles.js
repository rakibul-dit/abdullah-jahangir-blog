import Link from 'next/link'
import PostCardArticle from '../card/post-card-article'

export default function HomeArticles({ articles }) {
	return (
		<section className="h-sec h-articles">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>প্রবন্ধ সমূহ</span>
						<Link href="/articles/"><a>আরও দেখুন</a></Link>
					</h1>

					<div className="row row-r">
					{
						articles && articles.length && articles.map((article, i) =>
							<div className="col col-r s12 xl4" key={i}>
								<PostCardArticle article={article} />
							</div>
						)
					}
					</div>
				</div>
			</div>
		</section>
	)
}