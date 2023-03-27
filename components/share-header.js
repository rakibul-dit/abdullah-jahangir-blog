import { server } from "../lib/config";
import { useState } from "react";
import ShareModal from "./share-modal";
import { shareSocialOutline } from "ionicons/icons";

export default function HeaderShare({ asPath, title }) {
	const [shareOpen, setShareOpen] = useState(false);
	const [shareUrl, setShareUrl] = useState("");
	const [shareTitle, setShareTitle] = useState("");

	const handleShareClose = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setShareOpen(open);
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
			<ion-buttons slot="end">
				<ion-button slot="end" onClick={() => handleMobileShare()}>
					<ion-icon icon={shareSocialOutline} />
				</ion-button>
			</ion-buttons>

			<ShareModal
				open={shareOpen}
				closer={handleShareClose}
				url={shareUrl}
				title={shareTitle}
			/>
		</>
	);
}
