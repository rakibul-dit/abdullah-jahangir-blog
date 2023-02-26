import { server } from "../lib/config";
import { useState, useRef } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import Meta from "../components/meta";
import Snackbar from "@material-ui/core/Snackbar";

export default function Contact({ prev_page = "/" }) {
	//snackbar
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	const handleSnackbarClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackbarOpen(false);
	};

	// contact
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const nameEl = useRef(null);
	const subjectEl = useRef(null);
	const emailEl = useRef(null);
	const phoneEl = useRef(null);
	const messageEl = useRef(null);

	const handleNameChange = (e) => {
		e.target.classList.remove("error");
		setName(e.target.value.trim());
	};

	const handleSubjectChange = (e) => {
		e.target.classList.remove("error");
		setSubject(e.target.value.trim());
	};

	const handleEmailChange = (e) => {
		e.target.classList.remove("error");
		setEmail(e.target.value.trim());
	};

	const handlePhoneChange = (e) => {
		e.target.classList.remove("error");
		setPhone(e.target.value.trim());
	};

	const handleMessageChange = (e) => {
		e.target.classList.remove("error");
		setMessage(e.target.value.trim());
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//console.log('Sending')

		let error = false;

		const pattern =
			/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

		if (name === "") {
			nameEl.current.classList.add("error");
			error = true;
		}

		// if (subject === '') {
		// 	subjectEl.current.classList.add('error')
		// 	error = true
		// }

		if (email === "") {
			emailEl.current.classList.add("error");
			error = true;
		}

		if (!pattern.test(email)) {
			emailEl.current.classList.add("error");
			error = true;
		}

		// if (phone === '') {
		// 	phoneEl.current.classList.add('error')
		// 	error = true
		// }

		if (message === "") {
			messageEl.current.classList.add("error");
			error = true;
		}

		if (error) return;

		let data = {
			name,
			subject,
			email,
			phone,
			message,
		};

		fetch("/api/sendMail", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			//console.log('Response received')
			if (res.status === 200) {
				//console.log(res)
				setName("");
				setSubject("");
				setEmail("");
				setPhone("");
				setMessage("");

				nameEl.current.value = "";
				subjectEl.current.value = "";
				emailEl.current.value = "";
				phoneEl.current.value = "";
				messageEl.current.value = "";

				setSnackbarOpen(true);
			}
		});
	};

	return (
		<Layout>
			<Meta
				title="যোগাযোগ"
				description="ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর (রাহি.) একজন প্রখ্যাত
				আলেম ও বহু গ্রন্থ প্রণেতা ছিলেন। তাঁর পূর্ণ নাম: আবু নসর
				মুহাম্মদ আব্দুল্লাহ জাহাঙ্গীর। তাঁর পিতার নাম খোন্দকার
				আনোয়ারুজ্জামান (রাহি.)। তিনি আব্দুল্লাহ জাহাঙ্গীর নামে
				দেশ জুড়ে পরিচিত।"
				url={`${server}/contact`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<section className="contact-page-ctn">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
							<div className="col col-r s12 m12 l8 xl9">
								<div className="contact-left">
									<div className="contact-top">
										<h1>যোগাযোগ করুন</h1>
										{/*<p>আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।</p>*/}
									</div>

									<form
										className="contact-form"
										action=""
										method="POST"
										onSubmit={(e) => handleSubmit(e)}>
										<div className="row">
											<div className="col s12 m12 l6">
												<div className="contact-input">
													<p>আপনার নাম</p>
													<input
														type="text"
														name="name"
														onChange={(e) => handleNameChange(e)}
														ref={nameEl}
													/>
												</div>
											</div>
											<div className="col s12 m12 l6">
												<div className="contact-input">
													<p>বিষয়</p>
													<input
														type="text"
														name="subject"
														onChange={(e) => handleSubjectChange(e)}
														ref={subjectEl}
													/>
												</div>
											</div>
											<div className="col s12 m12 l6">
												<div className="contact-input">
													<p>ইমেইল</p>
													<input
														type="text"
														name="email"
														placeholder="email@example.com"
														onChange={(e) => handleEmailChange(e)}
														ref={emailEl}
													/>
												</div>
											</div>
											<div className="col s12 m12 l6">
												<div className="contact-input">
													<p>ফোন নাম্বার</p>
													<input
														type="text"
														name="phone"
														placeholder="+880 1xxxxxxxxx"
														onChange={(e) => handlePhoneChange(e)}
														ref={phoneEl}
													/>
												</div>
											</div>
											<div className="col s12 m12 l12">
												<div className="contact-input">
													<p>আপনার বার্তা</p>
													<textarea
														name="message"
														onChange={(e) => handleMessageChange(e)}
														ref={messageEl}></textarea>
												</div>
											</div>
											<div className="col s12 m12 l12">
												<div className="contact-input">
													<button
														className="btn-r"
														type="submit"
														name="contact">
														সাবমিট
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col col-r s12 m12 l4 xl3">
								<div className="contact-right">
									<div className="sidebar-profile sc-1">
										<div className="s-profile-image">
											{/* <img src="/img/id/profile-01.png" alt="" /> */}
											<Image
												src="/img/abdullah-jahangir.jpg"
												alt=""
												layout="fill"
												objectFit="cover"
												objectPosition="center center"
												loading="eager"
											/>
										</div>

										<h2 className="s-profile-name">
											ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর
										</h2>

										{/*<h3 className="s-profile-title">ইসলামিক স্কলার</h3>*/}

										<ul className="s-profile-social">
											<li>
												<a
													href="https://www.facebook.com/Assunnahtrust"
													target="_blank">
													<i className="facebook fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.youtube.com/sunnahtrust"
													target="_blank">
													<i className="youtube fab fa-youtube"></i>
												</a>
											</li>
											{/*<li>*/}
											{/*	<a href="https://twitter.com/dr_manjureelahi" target="_blank">*/}
											{/*		<i className="twitter fab fa-twitter"></i>*/}
											{/*	</a>*/}
											{/*</li>*/}
										</ul>
									</div>

									{/*<h2 className="sidebar-title">আমাদের ঠিকানা</h2>*/}

									<div className="contact-address">
										<p>আমাদের সাথে যোগাযোগ করুন</p>
										<ul>
											{/*<li>*/}
											{/*	<a href="tel:+01725845784">*/}
											{/*		<i className="material-icons">call</i>*/}
											{/*		<span title="+880 0000000">+880 0000000</span>*/}
											{/*	</a>*/}
											{/*</li>*/}
											<li>
												<a
													href="mailto:assunnahtrust@gmail.com"
													target="_blank">
													{/*<i className="material-icons">email</i>*/}
													<span title="assunnahtrust@gmail.com">
														assunnahtrust@gmail.com
													</span>
												</a>
											</li>
											{/*<li>*/}
											{/*	<p>*/}
											{/*		<i className="material-icons">near_me</i>*/}
											{/*		<span>১৫৫, হাজী মহসিন রোড, খুলনা</span>*/}
											{/*	</p>*/}
											{/*</li>*/}
										</ul>
									</div>

									{/*<h2 className="sidebar-title">প্রতিষ্ঠানসমূহ</h2>*/}

									{/*<div className="sidebar-sponsor">*/}
									{/*	<SponsorSlider />*/}
									{/*</div>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				open={snackbarOpen}
				autoHideDuration={3000}
				onClose={handleSnackbarClose}
				message="Email send successfully"
			/>
		</Layout>
	);
}

// const SponsorSlider = () => {
// 	const settings = {
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		arrows: false,
// 		//prevArrow: $('.sponsor-prev'),
// 		//nextArrow: $('.sponsor-next'),
// 		dots: false,
// 		draggable: true,
// 		//focusOnSelect: false,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		speed: 500,
// 		infinite: true,
// 		cssEase: 'ease',
// 		//mobileFirst: false,
// 	}

// 	return (
// 		<Slider
// 			className="sponsor-slider"
// 			{...settings}
// 		>
// 			<div className="sponsor-item">
// 				<a href="#" target="_blank">
// 					<img src="/img/sponsor/sponsor-01.jpg" alt="" />
// 				</a>
// 			</div>
// 			<div className="sponsor-item">
// 				<a href="#" target="_blank">
// 					<img src="/img/sponsor/sponsor-01.jpg" alt="" />
// 				</a>
// 			</div>
// 		</Slider>
// 	)
// }
