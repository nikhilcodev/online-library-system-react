// ─── Navbar Component ────────────────────────────────────────────────

import { NavLink } from "react-router-dom"

function Navbar() {
	return (
		<nav
			className="sticky top-0 z-50 flex items-center justify-between
                    px-6 py-4 bg-[black]/80 backdrop-blur-md
                    border-b border-white/5 shadow-lg shadow-black/40"
		>
			{/* ── Brand ──────────────────────────────────────────────── */}
			<NavLink
				to="/"
				className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors duration-200"
				style={{ fontFamily: "revert, sans-serif" }}
			>
				📖 E-Library
			</NavLink>

			{/* ── Navigation Links ───────────────────────────────────── */}
			<ul className="flex items-center gap-1">
				{[
					{ to: "/", label: "Home", end: true },
					{ to: "/books", label: "Browse Books", end: false },
					{ to: "/add", label: "Add Book +", end: false },
				].map(({ to, label, end }) => (
					<li key={to}>
						<NavLink
							to={to}
							end={end}
							className={({ isActive }) =>
								`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
									isActive
										? "bg-sky-600 text-white shadow shadow-indigo-500/30"
										: "text-slate-400 hover:text-white hover:bg-white/8"
								}`
							}
						>
							{label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
