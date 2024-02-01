import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailTopBack({ link, children }) {
	const router = useRouter();

	const [historyLength, setHistoryLength] = useState(0);

	useEffect(() => {
		setHistoryLength(window.history.length);
	}, []);

	return (
		<div className="top-back">
			{link && (
				<span
					style={{ cursor: `pointer` }}
					onClick={
						historyLength > 2
							? () => router.back()
							: () => router.push(`${link}`)
					}>
					{/* <a> */}
					<ArrowBackIcon /> ফিরে যান
					{/* </a> */}
				</span>
			)}
			{children}
		</div>
	);
}
