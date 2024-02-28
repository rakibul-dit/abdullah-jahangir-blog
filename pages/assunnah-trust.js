import { server } from "../lib/config";
import Meta from "../components/meta";
import AssunnahTrustCtn from "../components/pages/AssunnahTrust";

AssunnahTrust.title = "আস-সুন্নাহ ট্রাস্ট";

export default function AssunnahTrust() {
	return (
		<>
			<Meta
				title="আস-সুন্নাহ ট্রাস্ট"
				description="আস-সুন্নাহ ট্রাস্ট একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান।"
				url={`${server}/assunnah-trust`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			<AssunnahTrustCtn />
		</>
	);
}
