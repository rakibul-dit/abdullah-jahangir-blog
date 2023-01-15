import Header from "./header";
import Footer from "./footer";
import Sidenav from "./sidenav";

export default function Layout({ children, page }) {
	return (
		<div className="wrapper">
			<Sidenav />
			<div className="content">
				<div className="content_without_footer">
					<Header />
					<main className={`viewport ${page}`}>{children}</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}
