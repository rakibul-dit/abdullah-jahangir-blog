import { youtube } from '../../lib/config'
import Link from 'next/link'
import PostCardVideo from '../card/post-card-video2'

export default function HomeLectures({ lectures }) {
	return (
		<section className="h-sec h-lectures">
			<div className="page-width">
				<div className="box">
					<h1 className="title-r">
						<span>লেকচার সমগ্র</span>
						<Link href={`/lectures/${youtube.uploadPlaylistID}`}><a>আরও দেখুন</a></Link>
					</h1>

					<div className="row row-r">
					{
						lectures.videoLists && lectures.videoLists.map((item) =>
							<div className="col col-r s12 m6 xl3" key={item.id}>
								<PostCardVideo
									item={item}
									statistics={lectures.videoStats}
								/>
							</div>
						)
					}
					</div>
				</div>
			</div>
		</section>
	)
}