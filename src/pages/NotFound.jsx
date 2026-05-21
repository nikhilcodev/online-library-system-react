// ─── 404 Not Found Page ──────────────────────────────────────────────

import { useLocation, Link } from "react-router-dom"

function NotFound() {
	// Grab the URL that triggered this 404
	const location = useLocation()

	return (
		<div
			className="min-h-screen bg-[#0a0a0f] flex items-center justify-center
                    px-6 text-center relative overflow-hidden"
		>
			{/* Background glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-125 h-125 bg-indigo-600/10 rounded-full blur-[100px]"
				/>
			</div>

			<div className="relative z-10 max-w-md">
				{/* Big 404 */}
				<h1
					className="text-[10rem] leading-none font-bold text-transparent bg-clip-text bg-linear-to-b from-indigo-400 to-indigo-900"
					style={{ fontFamily: "'DM Serif Display', serif" }}
				>
					404
				</h1>

				<h2
					className="text-2xl font-bold text-white mb-3"
					style={{ fontFamily: "'DM Serif Display', serif" }}
				>
					Page Not Found
				</h2>

				{/* Show the exact invalid URL */}
				<p className="text-slate-400 text-sm mb-2">
					The route{" "}
					<code className="px-2 py-0.5 rounded bg-white/8 text-indigo-400 text-xs">
						{location.pathname}
					</code>{" "}
					does not exist.
				</p>

				<p className="text-slate-600 text-sm italic mb-8">
					Looks like you wandered off the shelves.
				</p>

				{/* Link back to home */}
				<Link
					to="/"
					className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-colors duration-200"
				>
					← Return to Home
				</Link>
			</div>
		</div>
	)
}

export default NotFound
