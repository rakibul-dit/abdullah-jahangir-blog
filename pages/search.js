import { server, youtube, constants } from "../lib/config";
import { getYoutubeSearchVideosByUrl } from "../lib/fetch";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSWRInfinite } from "swr";
import Layout from "../components/layout";
import Meta from "../components/meta";
import PostCardVideo2 from "../components/card/post-card-video2";
import Loader from "../components/loader";
import useOnScreen from "../hooks/useOnScreen";

const fetcher = async (...args) => {
  return await getYoutubeSearchVideosByUrl(args);
};

const getKey = (pageIndex, previousPageData, query) => {
  let pageToken = "";
  if (
    previousPageData !== null &&
    previousPageData.videoLists.nextPageToken !== null
  ) {
    pageToken = `&pageToken=${previousPageData.videoLists.nextPageToken}`;
  }

  return `${youtube.url}/search?key=${youtube.key}&part=snippet&channelId=${youtube.channelID}&maxResults=${constants.DEFAULT_PAGE_LIMIT}&q=${query}&type=video${pageToken}`;
};

export default function LectureList() {
  const { query } = useRouter();
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const pageTitle = query.q;

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args, query.q),
    fetcher,
    { initialData: [], revalidateOnMount: false }
  );

  const datas = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  //const isEmpty = data?.[0]?.length === 0;
  // const isEmpty = data && data[0].videoLists.videos.length === 0;
  const emptyCheckData = data.length !== 0 ? data[0] : []
  const isEmpty = emptyCheckData.videoLists ? emptyCheckData.videoLists.videos.length === 0 ? true : false : true
  console.log(isEmpty);

  const numberOfPages =
    data[0] && data[0].length !== 0 ? data[0].videoLists.numberOfPages : 0;
  const isReachingEnd = size === numberOfPages;
  const isRefreshing = isValidating && data && data.length === size;

  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setSize(size + 1);
    }
  }, [isVisible, isRefreshing]);

  return (
    <Layout>
      <Meta
        title={`অনুসন্ধান - ${pageTitle}`}
        description={`অনুসন্ধান - ${pageTitle}`}
        url={`${server}/search?q=${query.q}`}
        image={`${server}/img/id/default_share.png`}
        type="website"
      />

      <section className="cat-page-top cat-page-top-2">
        <div className="page-width">
          <div className="box">
            <h1>
              অনুসন্ধান - '{pageTitle}'
            </h1>
          </div>
        </div>
      </section>

      <section className={"cat-page-ctn cat-page-lectures"}>
        <div className="page-width">
          <div className="box">
            <div className="row row-r">
              {isEmpty && !isLoadingMore ? <p>No records found!</p> : null}
              {datas &&
                datas.map((data) => {
                  return (
                    data.videoLists.videos &&
                    data.videoLists.videos.map((item) => {
                      return (
                        <div className="col col-r s12 m6 xl3" key={item.id}>
                          <PostCardVideo2
                            item={item}
                            statistics={data.videoLists.videoStats}
                          />
                        </div>
                      );
                    })
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <div ref={ref}>
        {isLoadingMore ? (
          <div className={"loader"}>
            <Loader />
          </div>
        ) : (
          ""
        )}
      </div>

      {isReachingEnd || isEmpty ? (
        ""
      ) : (
        <div style={{ margin: "20px 0px" }}>
          <center>
            <button onClick={() => setSize(size + 1)}>আরও দেখুন</button>
          </center>
        </div>
      )}
    </Layout>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       initialVideos: [],
//     },
//     //revalidate: 60,
//   };
// }
