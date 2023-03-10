import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";

export default function BookCard({
	book: { bookSlug = "/", imageSrc = "", bookName = "", bookText = "" },
} = {}) {
	// console.log(book);
	return (
		// <div className="books-item pc-3">
		// 	<div className="books-image">
		// 		<Link href={`/books/${bookSlug}`}>
		// 			<a>
		// 				{/* <img src={imageSrc} alt="" /> */}
		// 				<Image
		// 					src={server + imageSrc}
		// 					alt=""
		// 					layout="fill"
		// 					objectFit="cover"
		// 					objectPosition="center center"
		// 					loading="eager"
		// 				/>
		// 			</a>
		// 		</Link>
		// 	</div>

		// 	<div className="books-detail">
		// 		<Link href={`/books/${bookSlug}`}>
		// 			<a className="books-name">{bookName}</a>
		// 		</Link>

		// 		<p className="books-text">{bookText}</p>

		// 		<Link href={`/books/${bookSlug}`}>
		// 			<a className="books-link">বিস্তারিত</a>
		// 		</Link>
		// 	</div>
		// </div>
		<div className="h-book-item">
			<div className="h-book-image">
				<Link href={`/books/details/${bookSlug}`}>
					<a>
						{/* <Image
							src={server + imageSrc}
							alt=""
							width={"auto"}
							height={"auto"}
							// objectFit="contain"
							objectPosition="center center"
							loading="eager"
							unoptimized
						/> */}
						<Image
							src={imageSrc}
							alt=""
							layout="fill"
							objectFit="cover"
							objectPosition="center center"
							loading="eager"
						/>
					</a>
				</Link>
			</div>
			<div className="h-book-detail">
				<Link href={`/books/details/${bookSlug}`}>
					<a className="book-name">{bookName}</a>
				</Link>

				<p className="book-text">{bookText}</p>

				<Link href={`/books/details/${bookSlug}`}>
					<a className="book-link">বিস্তারিত</a>
				</Link>
			</div>
		</div>
	);
}
