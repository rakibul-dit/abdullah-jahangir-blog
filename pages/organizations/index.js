import { server } from "../../lib/config";
import { getOrganizations, getOrganizationDetails } from "../../lib/fetch";
import { useState } from "react";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import OrganizationCard from "../../components/card/post-card-organization";
import OrganizationNav from "../../components/organization-nav";

export default function OrganizationList({ organizations }) {
	const [init, setInit] = useState(false);
	const [fetching, setFetching] = useState(false);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState(null);
	const [currentID, setCurrentID] = useState(null);

	const handleOpen = (id) => {
		setOpen(true);

		if (!init || currentID !== id) {
			setFetching(true);

			getOrganizationDetails(id).then((res) => {
				setData(res);
				setInit(true);
				setCurrentID(id);
				setFetching(false);
			});
		}
	};

	const handleClose = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setOpen(open);
	};

	return (
		<>
			<Meta
				title="অর্গানাইজেশনস"
				description="ড. মোহাম্মদ মানজুরে ইলাহী এর তত্তাবধায়নে অর্গানাইজেশনস"
				url={`${server}/organizations`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>অর্গানাইজেশনস</h1>
						{/*<p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।</p>*/}
					</div>
				</div>
			</section>

			<section className="organization-list">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
							{organizations &&
								organizations.length &&
								organizations.map((organization) => (
									<div className="col col-r s12 l6 xl4" key={organization.id}>
										<OrganizationCard
											organization={organization}
											navControl={handleOpen}
										/>
									</div>
								))}
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
	);
}

export async function getStaticProps(context) {
	//const res = await fetch(`${server}/api/organizations/listpage`)
	//const organizations = await res.json()

	const organizations = await getOrganizations();

	return {
		props: {
			organizations,
		},
	};
}
