import { server } from "../lib/config";
import Meta from "../components/meta";
import { IonContent } from "@ionic/react";
import MobileAppContent from "../components/pages/MobileApp";

MobileApp.title = "মোবাইল অ্যাপ";

export default function MobileApp({ isTab }) {
	return (
		<>
			<Meta
				title="মোবাইল অ্যাপ"
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) শাইখ এর মোবাইল অ্যাপ ইনস্টল করুন।"
				url={`${server}/mobile-app`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			{isTab ? (
				<IonContent>
					<div className="content">
						<div className="content_without_footer">
							<main className={`viewport`}>
								<div className="main-content">
									<MobileAppContent />
								</div>
							</main>
						</div>
					</div>
				</IonContent>
			) : (
				<MobileAppContent />
			)}
		</>
	);
}
