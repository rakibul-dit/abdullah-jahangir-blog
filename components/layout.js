import Header from './header'
import Footer from './footer'

export default function Layout({ children, page }) {
	return (
		<>
		<div className='content_without_footer'>
			<Header />
			<main className={`viewport ${page}`}>{ children }</main>
		</div>
			<Footer />
		</>
	)
}