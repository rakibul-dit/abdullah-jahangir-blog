import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function DetailTopBack({ link, children }) {
	return (
		<div className="top-back">
			<Link href={link}>
				<a>
					<ArrowBackIcon /> পিছনে যান
				</a>
			</Link>
			{children}
		</div>
	);
}
