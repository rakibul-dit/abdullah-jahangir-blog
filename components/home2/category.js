import { youtube } from "../../lib/config";
import Link from "next/link";

export default function HomeCategory() {
  return (
    <section className="h-sec opt_home_cat opt_home_cat_1">
      <div className="page-width">
        <div className="box">
          <div className="opt_home_cat_wrap">
            <div className="opt_home_cat_item">
              <Link href={`/lectures/${youtube.uploadPlaylistID}`}>
                <a className="card card-r">
                  <i className="fas fa-photo-video"></i>
                  <span>লেকচার</span>
                </a>
              </Link>
            </div>

            <div className="opt_home_cat_item">
              <Link href="/books/">
                <a className="card card-r">
                  <i className="fas fa-book"></i>
                  <span>বই সমূহ</span>
                </a>
              </Link>
            </div>

            <div className="opt_home_cat_item">
              <Link href="/research-papers/">
                <a className="card card-r">
                  <i className="far fa-file-alt"></i>
                  <span>রিসার্স পেপারস</span>
                </a>
              </Link>
            </div>

            <div className="opt_home_cat_item">
              <Link href="/articles/">
                <a className="card card-r">
                  <i className="fas fa-list-ul"></i>
                  <span>আর্টিকেলস</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
