import { youtube } from "../../lib/config";
import Link from "next/link";

export default function HomeCategory() {
	return (
		<section className="h-sec opt_home_cat opt_home_cat_2">
			<div className="page-width">
				<div className="box">
					<div className="opt_home_cat_wrap">
						<div className="opt_home_cat_item">
							<Link
								href={`/lectures/${youtube.uploadPlaylistID}`}
								className="card card-r">
								<i className="fas fa-photo-video"></i>
								<span>লেকচার</span>
							</Link>
						</div>

						<div className="opt_home_cat_item">
							<Link href="/books/" className="card card-r">
								<i className="fas fa-book"></i>
								<span>বই সমূহ</span>
							</Link>
						</div>

						<div className="opt_home_cat_item">
							<Link href="/research-papers/" className="card card-r">
								<i className="far fa-file-alt"></i>
								<span>রিসার্স পেপারস</span>
							</Link>
						</div>

						<div className="opt_home_cat_item">
							<Link href="/articles/" className="card card-r">
								<i className="fas fa-list-ul"></i>
								<span>আর্টিকেলস</span>
							</Link>
						</div>

						<div className="opt_home_cat_item">
							<Link href="/organizations/" className="card card-r">
								<i className="fas fa-sitemap"></i>
								<span>অর্গানাইজেশন</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
