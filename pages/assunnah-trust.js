import { server } from "../lib/config";
import Meta from "../components/meta";
import AssunnahTrustCtn from "../components/pages/AssunnahTrust";
import { IonContent } from "@ionic/react";

AssunnahTrust.title = "আস-সুন্নাহ ট্রাস্ট";

export default function AssunnahTrust({ isTab }) {
	return (
		<>
			<Meta
				title="আস-সুন্নাহ ট্রাস্ট"
				description="আস-সুন্নাহ ট্রাস্ট একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান।"
				url={`${server}/assunnah-trust`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			{isTab ? (
				<IonContent>
					<div className="content">
						<div className="content_without_footer">
							<main className={`viewport`}>
								<div className="main-content">
									<AssunnahTrustCtn />
								</div>
							</main>
						</div>
					</div>
				</IonContent>
			) : (
				<AssunnahTrustCtn />
			)}
		</>
	);
}
