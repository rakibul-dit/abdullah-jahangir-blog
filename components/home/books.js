import Link from 'next/link'
import BookCard from '../card/post-card-book'

export default function HomeBooks({ books }) {
	return (
		<section className="h-sec h-books">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>বই সমূহ</span>
						<Link href="/books/"><a>আরও দেখুন</a></Link>
					</h1>

					<div className="row row-r">
					{
						books && books.length && books.map((book, i) =>
							<div className="col col-r s12 l6 xl4" key={i}>
								<BookCard book={book} />
							</div>
						)
					}
					</div>
				</div>
			</div>
		</section>
	)
}