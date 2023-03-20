import Header from "./header";
import Footer from "./footer";
import Sidenav from "./sidenav";

export default function Layout({ children, page, prev_page }) {
	return (
		<>
			{/* <Header prev_page={prev_page} /> */}
			<Sidenav />
			<ion-content>
				{/* <div className="wrapper"> */}
				<div className="content">
					<div className="content_without_footer">
						<main className={`viewport ${page}`}>
							<div className="main-content">{children}</div>
						</main>
					</div>
					{/*<Footer />*/}
				</div>
				{/* </div> */}
			</ion-content>
		</>
	);
}
