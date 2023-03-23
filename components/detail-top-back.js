import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export default function DetailTopBack({ link, children }) {
	const router = useRouter();
	const goBack = (e) => {
		e.preventDefault();
		if (link !== "/") {
			router.back();
		} else router.push("/");
	};

	return (
		<div className="top-back">
			{/* <Link href={link}> */}
			<a onClick={goBack} href="#">
				<ArrowBackIcon /> পিছনে যান
			</a>
			{/* </Link> */}
			{children}
		</div>
	);
}
