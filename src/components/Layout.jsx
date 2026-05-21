// ─── Layout Component ────────────────────────────────────────────────

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Offline from "./Offline"

function Layout() {
	return (
		<>
			<Offline>
				<Navbar />
				<main className="min-h-screen">
					<Outlet />
				</main>
			</Offline>
		</>
	)
}

export default Layout
