import { server } from "../lib/config";
import { useState } from "react";
import ShareModal from "./share-modal";
import { shareSocialOutline } from "ionicons/icons";
import { IonButton, IonButtons, IonIcon } from "@ionic/react";

export default function HeaderShare({ asPath, title }) {
	const [shareOpen, setShareOpen] = useState(false);
	const [shareUrl, setShareUrl] = useState("");
	const [shareTitle, setShareTitle] = useState("");

	const handleShareClose = () => {
		// if (
		// 	event.type === "keydown" &&
		// 	(event.key === "Tab" || event.key === "Shift")
		// ) {
		// 	return;
		// }
		setShareOpen(false);
	};

	const handleMobileShare = () => {
		if (navigator.share) {
			navigator.share({
				title: title,
				url: `${server}${asPath}`,
			});
		} else {
			setShareUrl(`${server}${asPath}`);
			setShareTitle(title);
			setShareOpen(true);
		}
	};

	return (
		<>
			<IonButtons slot="end">
				<IonButton slot="end" onClick={() => handleMobileShare()}>
					<IonIcon icon={shareSocialOutline} />
				</IonButton>
			</IonButtons>

			<ShareModal
				openModal={shareOpen}
				closer={handleShareClose}
				url={shareUrl}
				title={shareTitle}
			/>
		</>
	);
}
