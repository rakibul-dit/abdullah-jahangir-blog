import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./share.module.scss";
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LineShareButton,
	LineIcon,
	TelegramShareButton,
	TelegramIcon,
	ViberShareButton,
	ViberIcon,
	RedditShareButton,
	RedditIcon,
	TumblrShareButton,
	TumblrIcon,
} from "react-share";

export default function ShareModal({ open, closer, url, title }) {
	return (
		<Modal
			open={open}
			onClose={closer(false)}
			className={styles.root}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
				classes: {
					root: styles.backdrop,
				},
			}}>
			<Fade in={open} timeout={100} style={{ transitionDelay: "0ms" }}>
				<div className={styles.modal}>
					<span className={styles.close} onClick={closer(false)}>
						<CloseIcon />
					</span>

					<div className={styles.title}>পোস্টটি শেয়ার করুন</div>

					<div className={styles.lists}>
						<div className={styles.item}>
							<EmailShareButton
								url={url}
								subject={title}
								onShareWindowClose={closer(false)}>
								<EmailIcon size={32} round={true} />
							</EmailShareButton>
						</div>

						<div className={styles.item}>
							<FacebookShareButton url={url} onShareWindowClose={closer(false)}>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
						</div>

						{/* <div className={styles.item}>
							<FacebookMessengerShareButton url={url}>
								<FacebookMessengerIcon size={32} round={true} />
							</FacebookMessengerShareButton>
						</div> */}

						<div className={styles.item}>
							<TwitterShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>

						<div className={styles.item}>
							<LinkedinShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<LinkedinIcon size={32} round={true} />
							</LinkedinShareButton>
						</div>

						<div className={styles.item}>
							<WhatsappShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<WhatsappIcon size={32} round={true} />
							</WhatsappShareButton>
						</div>

						<div className={styles.item}>
							<LineShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<LineIcon size={32} round={true} />
							</LineShareButton>
						</div>

						<div className={styles.item}>
							<TelegramShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<TelegramIcon size={32} round={true} />
							</TelegramShareButton>
						</div>

						<div className={styles.item}>
							<ViberShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<ViberIcon size={32} round={true} />
							</ViberShareButton>
						</div>

						<div className={styles.item}>
							<RedditShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<RedditIcon size={32} round={true} />
							</RedditShareButton>
						</div>

						<div className={styles.item}>
							<TumblrShareButton
								url={url}
								title={title}
								onShareWindowClose={closer(false)}>
								<TumblrIcon size={32} round={true} />
							</TumblrShareButton>
						</div>
					</div>
				</div>
			</Fade>
		</Modal>
	);
}
