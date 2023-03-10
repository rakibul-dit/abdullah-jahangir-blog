import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import React, { useEffect } from "react";
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

	return (
		<ion-app>
			<Component {...pageProps} />
		</ion-app>
	);
};

export default App;
