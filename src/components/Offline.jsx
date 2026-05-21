// ─── Offline Component ───────────────────────────────────────────────

import { useState, useEffect } from "react"

function Offline({ children }) {
	const [isOnline, setIsOnline] = useState(navigator.onLine)

	useEffect(() => {
		const goOnline = () => setIsOnline(true)
		const goOffline = () => setIsOnline(false)

		window.addEventListener("online", goOnline)
		window.addEventListener("offline", goOffline)

		return () => {
			window.removeEventListener("online", goOnline)
			window.removeEventListener("offline", goOffline)
		}
	}, [])

	if (isOnline) return children

	return (
		<div
			className="min-h-screen bg-[#0a0a0f] flex items-center justify-center
                    px-6 text-center relative overflow-hidden"
		>
			{/* Glow */}
			<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
				<div
					className="w-100 h-100 rounded-full
                        bg-indigo-600/10 blur-[100px]"
				/>
			</div>

			<div
				className="relative z-10 max-w-sm w-full bg-[#111118]
                      border border-white/8 rounded-2xl p-10
                      shadow-2xl shadow-black/60"
			>
				<span className="text-5xl block mb-5">📡</span>

				<h1
					className="text-2xl font-bold text-white mb-3"
					style={{ fontFamily: "'DM Serif Display', serif" }}
				>
					You're Offline
				</h1>

				<p className="text-slate-500 text-sm leading-relaxed mb-6">
					It looks like you've lost your connection. Check your internet and
					your library will be right back.
				</p>

				{/* Animated waiting indicator */}
				<div className="flex items-center justify-center gap-1.5">
					{[0, 1, 2].map((i) => (
						<span
							key={i}
							className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"
							style={{ animationDelay: `${i * 0.15}s` }}
						/>
					))}
				</div>

				<p className="mt-4 text-xs text-slate-700 uppercase tracking-widest">
					Waiting for connection…
				</p>
			</div>
		</div>
	)
}

export default Offline
