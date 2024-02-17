import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import React, { useEffect, useState } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

// Core CSS required for Ionic components to work properly
import "@ionic/core/css/core.css";

// Basic CSS for apps built with Ionic
import "@ionic/core/css/normalize.css";
// import "@ionic/core/css/structure.css"; // Remove if nothing is visible
import "@ionic/core/css/typography.css";

// Optional CSS utils that can be commented out
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "slick-carousel/slick/slick.css";
import "../styles/style.scss";
import Header from "../components/header";
import { IonApp, IonContent, IonPage, setupIonicReact } from "@ionic/react";
import { setIsBack, setIsTab } from "../store/actions";
import NonSSRWrapper from "../components/NoSSRWrapper";
import Head from "next/head";
import Sidenav from "../components/sidenav";
import Store from "../store";
import * as selectors from "../store/selectors";

const App = ({ Component, pageProps }) => {
	const isTab = Store.useState(selectors.getIsTab);

	setupIonicReact();
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

	useEffect(() => {
		router.beforePopState(() => {
			setIsBack(true);
			return true;
		});
	}, [router]);

	return (
		<>
			{isTab ? (
				<IonApp>
					<IonPage>
						<Head>
							<title>Create Next App</title>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1, viewport-fit=cover"
							/>
							<link rel="icon" href="/favicon.ico" />
						</Head>
						<NonSSRWrapper>
							<Header
								prev_page={pageProps.prev_page ? pageProps.prev_page : "/"}
								isTab={isTab}
								title={
									Component.title
										? Component.title
										: "ড. আব্দুল্লাহ জাহাঙ্গীর (রাহি.)"
								}
							/>
							<Sidenav />
							<Component {...pageProps} isTab={isTab} />
						</NonSSRWrapper>
					</IonPage>
				</IonApp>
			) : (
				<>
					<Head>
						<title>Create Next App</title>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, viewport-fit=cover"
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<Header
						prev_page={pageProps.prev_page ? pageProps.prev_page : "/"}
						isTab={isTab}
						title={
							Component.title
								? Component.title
								: "ড. আব্দুল্লাহ জাহাঙ্গীর (রাহি.)"
						}
					/>
					<Sidenav />
					<div className="content-wrapper">
						<div className="content">
							<div className="content_without_footer">
								<main className={`viewport`}>
									<div className="main-content">
										<Component {...pageProps} isTab={isTab} />
									</div>
								</main>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default App;
