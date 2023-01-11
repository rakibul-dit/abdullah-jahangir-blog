import { getOrganizationDetails } from '../../lib/fetch'
import { useState } from 'react'
import Link from 'next/link'
import OrganizationCard from '../card/post-card-organization'
import OrganizationNav from '../organization-nav'

export default function HomeOrganization({ organizations }) {
	const [init, setInit] = useState(false)
	const [fetching, setFetching] = useState(false)
	const [open, setOpen] = useState(false)
	const [data, setData] = useState(null)
	const [currentID, setCurrentID] = useState(null)

	const handleOpen = id => {
		setOpen(true)

		if (!init || currentID !== id) {
			setFetching(true)

			getOrganizationDetails(id).then(res => {
				setData(res)
				setInit(true)
				setCurrentID(id)
				setFetching(false)
			})
		}
	}

	const handleClose = (open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}
		setOpen(open)
	}

	return (
		<>
			<section className="h-sec h-organization">
				<div className="page-width">
					<div className="box">
						<h1 className="title-r">
							<span>অর্গানাইজেশনস</span>
							<Link href="/organizations/"><a>আরও দেখুন</a></Link>
						</h1>

						<div className="row row-r">
						{
							organizations && organizations.length && organizations.map(organization =>
								<div className="col col-r s12 l6 xl4" key={organization.id}>
									<OrganizationCard
										organization={organization}
										navControl={handleOpen}
									/>
								</div>
							)
						}
						</div>
					</div>
				</div>
			</section>

			<OrganizationNav
				init={init}
				fetching={fetching}
				open={open}
				data={data}
				navControl={handleClose}
			/>
		</>
	)
}