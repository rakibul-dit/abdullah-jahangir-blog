import { server } from "../lib/config";
import Meta from "../components/meta";
import MobileAppContent from "../components/pages/MobileApp";

MobileApp.title = "মোবাইল অ্যাপ";

export default function MobileApp() {
	return (
		<>
			<Meta
				title="মোবাইল অ্যাপ"
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) শাইখ এর মোবাইল অ্যাপ ইনস্টল করুন।"
				url={`${server}/mobile-app`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>
			<MobileAppContent />
		</>
	);
}
