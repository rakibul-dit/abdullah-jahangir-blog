import SectionHeader from "../section-header2";
import PostCard1 from "../card/post1";
import PostCard2 from "../card/post2";

export default function HomePostList({ posts }) {
  return (
    <section className="h-sec h3-post-3">
      <div className="page-width">
        <div className="box">
          <SectionHeader //
            title="আর্টিকেলস"
            link="/articles/"
          />
          <div className="row row-r">
            <div className="col col-r s12 l8">
              <div className="row row-r">
                <div className="col col-r s12">
                  <PostCard1 post={posts[0]} />
                </div>
                <div className="col col-r s12 mb-0">
                  <PostCard1 post={posts[1]} />
                </div>
              </div>
            </div>

            <div className="col col-r s12 l4">
              <PostCard2 post={posts[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
