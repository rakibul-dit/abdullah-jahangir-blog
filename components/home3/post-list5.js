// trending post
import PostCard from "../card/post6";

export default function HomePostList({ posts }) {
  return (
    <section className="h-sec h3-post-5">
      <div className="page-width">
        <div className="box">
          <h2 className="h3-sec-title-2">সর্বাধিক আলোচিত</h2>

          <div className="row row-r">
            <div className="col col-r s12 l6">
              <PostCard post={posts[0]} />
            </div>
            <div className="col col-r s12 l6">
              <PostCard post={posts[1]} />
            </div>
          </div>
        </div>
      </div>
      <div className="h3-bg-pattern"></div>
    </section>
  );
}
