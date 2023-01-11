export default function Newsletter() {
	return (
		<section className="h-sec h-newsletter">
			<div className="page-width">
				<div className="box">
					<div className="h-newsletter-ctn">
						<form action="" method="POST">
							<h2>আমাদের নিউজলেটার সাবস্ক্রাইব করুন!</h2>
							<p>আমাদের সকল পোস্ট নিয়মিত আপনার ইমেইলে পেতে অবশ্যই সাবস্ক্রাইব করুন</p>
							<input type="text" name="newsletter" placeholder="আপনার ইমেইল" />
							<button className="btn-r" type="submit">সাবমিট</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}