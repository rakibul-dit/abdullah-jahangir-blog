import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import React, { useEffect, useState } from "react";
import { defineCustomElements as ionDefineCustomElements } from "@ionic/core/loader";

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "slick-carousel/slick/slick.css";
import "../styles/style.scss";
import Header from "../components/header";

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		ionDefineCustomElements(window);
	});

	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	const [isTab, setIsTab] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// set isTab depending on screen size
			const x = window.matchMedia("(max-width: 768px)");
			if (x.matches) {
				setIsTab(true);
			} else {
				setIsTab(false);
			}
			x.onchange = () => {
				if (x.matches) {
					setIsTab(true);
				} else {
					setIsTab(false);
				}
			};
		}
	}, []);

	return (
		<>
			<div className="ion-page">
				<Header
					prev_page={pageProps.prev_page ? pageProps.prev_page : "/"}
					isTab={isTab}
					title={
						Component.title
							? Component.title
							: "ড. আব্দুল্লাহ জাহাঙ্গীর (রাহি.)"
					}
				/>
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default App;
