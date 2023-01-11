import Link from "next/link";
import PostCard from "../card/post8";

export default function HomePostList({ blogs }) {
  return (
    <section className="h-sec opt_home_blogs">
      <div className="page-width">
        <div className="box">
          <div className="row row-r">
            <div className="col col-r s12 l9">
              <div className="opt_home_blog_left">
                <div className="row row-r">
                  {blogs &&
                    blogs.length &&
                    blogs.map((blog) => (
                      <div className="col col-r s12 xl6" key={blog.id}>
                        <PostCard post={blog} />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col col-r s12 l3">
              <div className="opt_home_blog_right">
                <div className="opt_home_blog_related">
                  <Link href="/">
                    <a>পিতা-মাতার অন্যায় আচরণে সন্তানের করণীয়</a>
                  </Link>
                  <span className="date-r">জানুয়ারি ৪, ২০২১</span>
                </div>

                <div className="opt_home_blog_related">
                  <Link href="/">
                    <a>পিতা-মাতার অন্যায় আচরণে সন্তানের করণীয়</a>
                  </Link>
                  <span className="date-r">জানুয়ারি ৪, ২০২১</span>
                </div>

                <div className="opt_home_blog_related">
                  <Link href="/">
                    <a>পিতা-মাতার অন্যায় আচরণে সন্তানের করণীয়</a>
                  </Link>
                  <span className="date-r">জানুয়ারি ৪, ২০২১</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
