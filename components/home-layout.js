import Header from "./header";
import Footer from "./footer";
import Sidenav from "./sidenav";

export default function HomeLayout({ children, page }) {
	return (
		<div className="wrapper">
			<Sidenav />
			<div className="content">
				<div className="content_without_footer">
					<Header />
					<main className={`viewport ${page}`}>
						<HomeBanner />
						<div className="main-content">{children}</div>
					</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}
