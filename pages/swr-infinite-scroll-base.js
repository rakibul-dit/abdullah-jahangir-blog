import { useSWRInfinite } from 'swr'
import { useState, useRef, useEffect } from 'react'

import fetcher from '../lib/lecturesFetcher'
import useOnScreen from '../hooks/useOnScreen'
import {constants, youtube} from "../lib/config";

const PAGE_SIZE = 24

// const getKey = (pageIndex, previousPageData) => {
//     let pageToken = previousPageData == null ? '' : `&pageToken=${previousPageData.nextPageToken}`
//
//     return `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${youtube.uploadPlaylistID}&maxResults=${PAGE_SIZE}${pageToken}`
// }
//
// export default function App({ initialVideos }) {
//     const ref = useRef()
//     const isVisible = useOnScreen(ref)
//
//     const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
//         (...args) => getKey(...args), fetcher, {initialData: initialVideos, revalidateOnMount: true }
//     )
//
//     const issues = data ? [].concat(...data) : []
//     const isLoadingInitialData = !data && !error
//     const isLoadingMore =
//         isLoadingInitialData ||
//         (size > 0 && data && typeof data[size - 1] === 'undefined')
//     const isEmpty = data?.[0]?.length === 0
//     // const isReachingEnd = size === PAGE_SIZE
//     const isRefreshing = isValidating && data && data.length === size
//
//     useEffect(() => {
//         if (isVisible && !isRefreshing) {
//             setSize(size + 1)
//             console.log("Scrolled", size)
//         }
//     }, [isVisible, isRefreshing])
//
//     return (
//         <div>
//             {isEmpty ? <p>No issues found.</p> : null}
//             {
//                 issues && issues.map((issue) => {
//                     return (
//                         <div>
//                             <div key={issue.nextPageToken}>{issue.nextPageToken}</div>
//                             {
//                                 issue.items && issue.items.map(item => {
//                                     return(<h1 key={item.id}>{item.snippet.title}</h1>)
//                                 })
//                             }
//                         </div>
//                     )
//                 })
//             }
//             <div ref={ref}>
//                 {isLoadingMore ? 'loading...' : ''}
//             </div>
//         </div>
//     )
// }
//
// export async function getStaticProps() {
//     const url = `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${youtube.uploadPlaylistID}&maxResults=${PAGE_SIZE}`
//     const res = await fetch(url)
//     const initialVideos = await (await res).json()
//
//     return {
//         props: {
//             initialVideos: [initialVideos]
//         }
//     }
// }

export default function App() {
    return(<div></div>)
}