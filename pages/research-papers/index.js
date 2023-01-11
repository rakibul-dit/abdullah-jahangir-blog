import { server } from '../../lib/config'
import { getPapers } from '../../lib/fetch'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import PostCardPaper from '../../components/card/post-card-paper'
import Pagination from '../../components/pagination'

export default function BlogList({ papers }) {
	return (
		<Layout>
			<Meta
				title="রিসার্চ পেপারস"
				description="ড. মোহাম্মদ মানজুরে ইলাহী এর রিসার্চ পেপারস"
				url={`${server}/research-papers`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>রিসার্চ পেপারস{/* <span>১২</span> */}</h1>
						{/*<p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।</p>*/}
					</div>
				</div>
			</section>

			<section className="cat-page-papers">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
						{
							papers && papers.length && papers.map(paper =>
								<div className="col col-r s12 xl6" key={paper.id}>
									<PostCardPaper paper={paper} />
								</div>
							)
						}
						</div>
					</div>
				</div>
			</section>

			{/*<Pagination />*/}
		</Layout>
	)
}


export async function getStaticProps(context) {
	//const res = await fetch(`${server}/api/papers/listpage`)
	//const papers = await res.json()

	const papers = await getPapers()

	return {
		props: {
			papers,
		},
	}
}