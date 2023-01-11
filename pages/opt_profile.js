import { getAllPlaylists2, getHome3Posts4, getHomeBooks } from "../lib/fetch";

import Meta from "../components/meta";
import Header from "../components/header3";
import Footer from "../components/footer";

import HomeBanner from "../components/home3/banner";
import HomeQuote from "../components/home3/quote";
import HomePostList1 from "../components/home3/post-list1";
import HomePostList2 from "../components/home3/post-list2";
import HomePostList3 from "../components/home3/post-list3";
import HomePostList4 from "../components/home3/post-list4";
import HomePostList5 from "../components/home3/post-list5";
import HomeBookList from "../components/home3/books";
import HomeFeatured from "../components/home2/featured";

export default function Home({ playlists, posts4, books }) {
  return (
    <>
      <Meta
        title="Dr. Monzur-E-Elahi | Official website"
        description="Dr. Monzur-E-Elahi | Official website"
        url="www.monzureelahi.com"
        image="/img/id/logo.png"
        type="website"
      />

      <Header playlists={playlists} />

      <main className="viewport homepage home-3">
        <HomeBanner />
          {/*<HomeFeatured />*/}
          <HomePostList1 blogs={posts4} />
        <HomePostList2 posts={posts4} />
        <HomePostList3 posts={posts4} />
        <HomeQuote />
        <HomePostList4 posts={posts4} />
        <HomePostList5 posts={posts4} />
        <HomeBookList books={books} />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const playlists = await getAllPlaylists2();
  const posts4 = await getHome3Posts4();
  const books = await getHomeBooks();

  return {
    props: {
      playlists: playlists.playlists,
      posts4,
      books,
    },
  };
}
