import { youtube } from "../../lib/config";
import Link from "next/link";
import PostCard from "../card/post9";

export default function HomePostList({ blogs }) {
  return (
    <section className="h-sec h3-post-1">
      <div className="page-width">
        <div className="box">
          <div className="row row-r">
            <div className="col col-r s12 l8">
              <div className="h3-post-left">
                <div className="row row-r">
                  {blogs &&
                    blogs.length &&
                    blogs.map((blog) => (
                      <div className="col col-r s12 m6" key={blog.id}>
                        <PostCard post={blog} />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col col-r s12 l4">
              <div className="h3-post-right">
                <div className="h3-right-title">ক্যাটেগরি</div>

                <div className="h3-cat-wrap">
                  <div className="h3-cat-card">
                    <Link href={`/lectures/${youtube.uploadPlaylistID}`}>
                      <a className="card card-r">
                        <i className="fas fa-photo-video"></i>
                        <span>লেকচার</span>
                      </a>
                    </Link>
                  </div>

                  <div className="h3-cat-card">
                    <Link href="/books/">
                      <a className="card card-r">
                        <i className="fas fa-book"></i>
                        <span>বই সমূহ</span>
                      </a>
                    </Link>
                  </div>

                  <div className="h3-cat-card">
                    <Link href="/research-papers/">
                      <a className="card card-r">
                        <i className="far fa-file-alt"></i>
                        <span>রিসার্স পেপারস</span>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="h3-right-title">আমাদের সম্পর্কে</div>

                <div className="h3-right-text">
                  আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে
                  অনুগ্রহ করে নিচের ফর্ম
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
