import Link from "next/link";
import Image from "next/image";

export default function BookCard({
	book: {
		bookSlug = "/", //
		imageSrc = "",
		bookName = "",
		bookText = "",
	},
} = {}) {
	return (
		<div className="books-item pc-3 bc-2">
			<div className="books-image">
				<Link href={`/books/${bookSlug}`}>
					<Image
						src={imageSrc}
						alt=""
						fill
						style={{
							objectFit: "cover",
							objectPosition: "cebter center",
						}}
						loading="eager"
						unoptimized
					/>
					<div className="book-layer">
						<span>বিস্তারিত দেখুন</span>
					</div>
				</Link>
			</div>

			<div className="books-detail">
				<Link href={`/books/${bookSlug}`} className="books-name">
					{bookName}
				</Link>
				<p className="books-text">{bookText}</p>
			</div>
		</div>
	);
}
