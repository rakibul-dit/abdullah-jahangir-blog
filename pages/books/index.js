import { server } from '../../lib/config'
import { getBooks } from '../../lib/fetch'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import BookCard from '../../components/card/post-card-book'
import Pagination from '../../components/pagination'

export default function BookList({ books }) {
	return (
		<Layout>
			<Meta
				title="বই সমূহ"
				description="ড. মোহাম্মদ মানজুরে ইলাহী এর বই সমূহ"
				url={`${server}/books`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>
							বই সমূহ
							{/*<span>১২</span>*/}
						</h1>
						{/*<p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।</p>*/}
					</div>
				</div>
			</section>

			<section className="cat-page-books">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
						{
							books && books.length && books.map(book =>
								<div className="col col-r s12 l6 xl4" key={book.id}>
									<BookCard book={book} />
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
	//const res = await fetch(`${server}/api/books/listpage`)
	//const books = await res.json()

	const books = await getBooks()

	return {
		props: {
			books,
		},
	}
}