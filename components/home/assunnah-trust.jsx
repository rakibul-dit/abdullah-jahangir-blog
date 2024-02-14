import PostCardRecent from "../card/post-card-recent";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AssunnahTrust({ isTab }) {
	const router = useRouter();
	const handleMobileLink = (e) => {
		router.push(e.target.dataset.href);
	};

	return (
		<>
			<section className="h-sec h3-quote h-assunnah-trust h-banner-2">
				<div className="page-width">
					<div className="box h-banner-ctn">
						<div className="row row-r">
							<div className="col col-r s12 m6 l6">
								<div className="h3-quote-left">
									<Image
										src={"/img/assunnah-trust.svg"}
										alt=""
										// layout="fill"
										width={350}
										height={250}
										style={{
											// objectFit: "contain",
											objectPosition: "cebter center",
										}}
										loading="eager"
										unoptimized
									/>
								</div>
							</div>
							<div className="col col-r s12 m6 l6">
								<div className="h3-quote-right">
									<h2>
										আস-সুন্নাহ ট্রাস্ট একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও
										পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান। এই
										প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত,
										মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে
										আর্তমানবতার সেবা, সমাজ সংস্কার, মহত্তম নীতিচেতনার সঞ্চার,
										কর্মসংস্থান তৈরি, দারিদ্র্য বিমোচন, ইসলামী তমদ্দুনের প্রসার,
										বহুমুখী শিক্ষায়ন প্রকল্প পরিচালনা, ত্রাণ বিতরণ, স্বল্পমূল্যে
									</h2>
									{isTab ? (
										<div>
											<span
												className="see-more-1 a"
												data-href="/assunnah-trust"
												onClick={handleMobileLink}>
												আরও দেখুন
											</span>
										</div>
									) : (
										<Link href="/assunnah-trust" className="see-more-1">
											আরও দেখুন
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
