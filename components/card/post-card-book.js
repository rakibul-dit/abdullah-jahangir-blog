import { server } from '../../lib/config'
import Link from 'next/link'
import Image from 'next/image'

export default function BookCard({
	book: {
		bookSlug = "/",
		imageSrc = "",
		bookName = "",
		bookText = ""
	}
} = {}) {
	return (
		<div className="books-item pc-3">
			<div className="books-image">
				<Link href={`/books/${bookSlug}`}>
					<a>
						{/* <img src={imageSrc} alt="" /> */}
						<Image
							src={server + imageSrc}
							alt=""
							layout="fill"
							objectFit="cover"
							objectPosition="center center"
							loading="eager"
						/>
					</a>
				</Link>
			</div>

			<div className="books-detail">
				<Link href={`/books/${bookSlug}`}>
					<a className="books-name">{bookName}</a>
				</Link>

				<p className="books-text">{bookText}</p>

				<Link href={`/books/${bookSlug}`}>
					<a className="books-link">বিস্তারিত</a>
				</Link>
			</div>
		</div>
	)
}