import { server } from "../lib/config";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import styles from "./share.module.scss";
import ShareModal from "./share-modal";

export default function Share({ urlWeb, urlMobile, title }) {
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

	const handleWebShare = () => {
		setShareUrl(`${server}/${urlWeb}`);
		setShareTitle(title);
		setShareOpen(true);
	};

	const handleMobileShare = () => {
		if (navigator.share) {
			navigator.share({
				title: title,
				url: urlMobile,
			});
		} else {
			setShareUrl(`${server}/${urlWeb}`);
			setShareTitle(title);
			setShareOpen(true);
		}
	};

	return (
		<>
			<div className={styles.wrapper}>
				<button
					onClick={() => handleMobileShare()}
					className={`${styles.btn} ${styles.btn_mobile}`}>
					শেয়ার <ShareIcon />
				</button>

				<button
					onClick={() => handleWebShare()}
					className={`${styles.btn} ${styles.btn_web}`}>
					শেয়ার <ShareIcon />
				</button>
			</div>

			<ShareModal
				open={shareOpen}
				closer={handleShareClose}
				url={shareUrl}
				title={shareTitle}
			/>
		</>
	);
}
