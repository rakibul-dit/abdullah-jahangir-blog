import { server } from "../lib/config";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ShareModal from "./share-modal";
import styles from "./share.module.scss";

export default function MobileNavShare({ asPath, title }) {
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

	const handleMobileShare = (e) => {
		e.preventDefault();
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
			<li>
				<div className="a" onClick={handleMobileShare}>
					<ShareIcon /> শেয়ার
				</div>
			</li>

			<ShareModal
				open={shareOpen}
				closer={handleShareClose}
				url={shareUrl}
				title={shareTitle}
			/>
		</>
	);
}
