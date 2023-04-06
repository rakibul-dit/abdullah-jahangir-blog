import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";

export default function BookCard({
	book: { bookSlug = "/", imageSrc = "", bookName = "", bookText = "" },
	isTab,
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
				{isTab ? (
					<Link href={`/books/details/${bookSlug}`} passHref>
						<span className="a">
							<Image
								src={imageSrc}
								alt=""
								layout="fill"
								objectFit="cover"
								objectPosition="center center"
								loading="eager"
								unoptimized
							/>
						</span>
					</Link>
				) : (
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
								unoptimized
							/>
						</a>
					</Link>
				)}
			</div>
			<div className="h-book-detail">
				{isTab ? (
					<Link href={`/books/details/${bookSlug}`} passHref>
						<span className="book-name a">{bookName}</span>
					</Link>
				) : (
					<Link href={`/books/details/${bookSlug}`}>
						<a className="book-name">{bookName}</a>
					</Link>
				)}

				<p className="book-text">{bookText}</p>

				{isTab ? (
					<Link href={`/books/details/${bookSlug}`} passHref>
						<span className="book-link a">বিস্তারিত</span>
					</Link>
				) : (
					<Link href={`/books/details/${bookSlug}`}>
						<a className="book-link">বিস্তারিত</a>
					</Link>
				)}
			</div>
		</div>
	);
}
