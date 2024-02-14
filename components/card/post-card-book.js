import { server } from "../../lib/config";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BookCard({
	book: { bookSlug = "/", imageSrc = "", bookName = "", bookText = "" },
	isTab,
} = {}) {
	const router = useRouter();
	const handleMobileLink = (e) => {
		router.push(e.target.dataset.href);
	};

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
					<div>
						<span
							className="a"
							data-href={`/books/details/${bookSlug}`}
							onClick={handleMobileLink}>
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
						</span>
					</div>
				) : (
					<Link href={`/books/details/${bookSlug}`}>
						{/* <a> */}
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
							fill
							style={{
								objectFit: "cover",
								objectPosition: "cebter center",
							}}
							loading="eager"
							unoptimized
						/>
						{/* </a> */}
					</Link>
				)}
			</div>
			<div className="h-book-detail">
				{isTab ? (
					<div>
						<span
							className="book-name a"
							data-href={`/books/details/${bookSlug}`}
							onClick={handleMobileLink}>
							{bookName}
						</span>
					</div>
				) : (
					<Link href={`/books/details/${bookSlug}`} className="book-name">
						{bookName}
					</Link>
				)}

				<p className="book-text">{bookText}</p>

				{isTab ? (
					<div>
						<span
							className="book-link a"
							data-href={`/books/details/${bookSlug}`}
							onClick={handleMobileLink}>
							বিস্তারিত
						</span>
					</div>
				) : (
					<Link href={`/books/details/${bookSlug}`} className="book-link">
						বিস্তারিত
					</Link>
				)}
			</div>
		</div>
	);
}
