import { server } from '../../lib/config'
import Image from 'next/image'

export default function OrganizationCard({
	organization: {
		id = '',
		imageSrc = '',
		orgName = '',
		orgExcerpt = ''
	},
	navControl = ''
} = {}) {
	return (
		<div className="card card-r pc-2">
			<div className="card-image">
				<div
					className="image-r organization-image"
					onClick={() => navControl(id)}
				>
					{/* <img className="organizations-logo" src={imageSrc} alt="" /> */}
					<Image
						className="organization-logo"
						src={server + imageSrc}
						alt=""
						layout="fill"
						objectFit="contain"
						objectPosition="center center"
						loading="eager"
					/>
				</div>
			</div>

			<div className="card-content">
				<div
					className="organization-name"
					onClick={() => navControl(id)}
				>
					{orgName}
				</div>

				<div className="organization-desc">
					{orgExcerpt} <span onClick={() => navControl(id)}>আরও দেখুন</span>
				</div>
			</div>
		</div>
	)
}