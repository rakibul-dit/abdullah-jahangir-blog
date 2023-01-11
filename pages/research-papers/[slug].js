import { server } from '../../lib/config'
import { getPapers, getPaperDetails, getRelatedPapers } from '../../lib/fetch'
import Link from 'next/link'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import PostCardPaper from '../../components/card/post-card-paper'
import parse from 'html-react-parser'
import Share from '../../components/share'

export default function BlogDetail({ detail, papers }) {
	return (
		<Layout>
			<Meta
				title={detail.postTitle}
				description={`ড. মোহাম্মদ মানজুরে ইলাহী এর রিসার্চ পেপারস - ${detail.postTitle}`}
				url={`${server}/research-papers/${detail.postSlug}`}
				image={`${server}/img/id/default_share.png`}
				type="article"
			/>

			<section className="blog-detail-top">
				<div className="page-width">
					<div className="box">
						{/*<Link href={detail.catURL}>*/}
						{/*	<a className="cat-r">{detail.catText}</a>*/}
						{/*</Link>*/}

						<Link href={`/research-papers/${detail.postSlug}`}>
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

								{/*	<Link href="/research-papers/">*/}
								{/*		<a>#কুরআন</a>*/}
								{/*	</Link>*/}
								{/*	<Link href="/research-papers/">*/}
								{/*		<a>#হাদিস</a>*/}
								{/*	</Link>*/}
								{/*</div>*/}

								<div className="blog-share">
									<Share
										urlWeb={`research-papers/${detail.postSlug}`}
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
			{/*				papers && papers.length && papers.map(paper =>*/}
			{/*					<div className="col col-r s12 xl4" key={paper.id}>*/}
			{/*						<PostCardPaper paper={paper} />*/}
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
	//const resRelated = await fetch(`${server}/api/papers/related`)
	//const papers = await resRelated.json()

	const slug = params.slug
	const detail = await getPaperDetails(slug)
	const papers = await getRelatedPapers()

	return {
		props: {
			detail,
			papers,
		},
	}
}

export async function getStaticPaths() {
	//const res = await fetch(`${server}/api/papers/listpage`)
	//const papers = await res.json()

	const papers = await getPapers()

	const paths = papers.map(paper => ({
		params: { slug: paper.postSlug },
	}))

	return {
		paths,
		fallback: false,
	}
}