import { server } from '../../lib/config'
import { getArticles, getArticleDetails, getRelatedArticles } from '../../lib/fetch'
import Link from 'next/link'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import parse from 'html-react-parser'
import Share from '../../components/share'

export default function BlogDetail({ detail }) {
	return (
		<Layout>
			<Meta
				title={detail.postTitle}
				description={detail.postExcerpt}
				url={`${server}/articles/${detail.postSlug}`}
				image={`${server}/img/id/default_share.png`}
				type="article"
			/>

			<section className="blog-detail-top">
				<div className="page-width">
					<div className="box">
						<Link href={`/articles/${detail.postSlug}`}>
							<a className="heading-r">
								{detail.postTitle}
							</a>
						</Link>
						{/*<span className="date-r">{detail.postDate}</span>*/}
					</div>
				</div>
			</section>

			<section className="blog-detail-ctn">
				<div className="page-width">
					<div className="box">
						<div className="blog-area">
							<div className="blog-detail">
								{ parse(detail.postContent) }
							</div>

							<div className="blog-action">
								{/*<div className="blog-tag">*/}
								{/*	<h2>ট্যাগ</h2>*/}

								{/*	<Link href="/articless/">*/}
								{/*		<a>#কুরআন</a>*/}
								{/*	</Link>*/}
								{/*	<Link href="/articless/">*/}
								{/*		<a>#হাদিস</a>*/}
								{/*	</Link>*/}
								{/*</div>*/}

								<div className="blog-share">
									<Share
										urlWeb={`articles/${detail.postSlug}`}
										urlMobile={detail.postSlug}
										title={detail.postTitle}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*<section className="blog-page-related">*/}
			{/*	<div className="page-width">*/}
			{/*		<div className="box">*/}
			{/*			<h1 className="title-r">*/}
			{/*				<span>সম্পর্কিত পোস্ট</span>*/}
			{/*			</h1>*/}

			{/*			<div className="row row-r">*/}
			{/*			{*/}
			{/*				articles && articles.length && articles.map(article =>*/}
			{/*					<div className="col col-r s12 xl4" key={article.id}>*/}
			{/*						<PostCardArticle article={article} />*/}
			{/*					</div>*/}
			{/*				)*/}
			{/*			}*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const slug = params.slug
	const detail = await getArticleDetails(slug)
	const articles = await getRelatedArticles()

	return {
		props: {
			detail,
			articles,
		},
	}
}

export async function getStaticPaths() {
	const articles = await getArticles()

	const paths = articles.map(article => ({
		params: { slug: article.postSlug },
	}))

	return {
		paths,
		fallback: false,
	}
}
