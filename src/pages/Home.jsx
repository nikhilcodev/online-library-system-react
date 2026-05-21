// ─── Home Page ───────────────────────────────────────────────────────

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { CATEGORIES } from "../data/books"
import BookCard from "../components/BookCard"

// Emoji icons per category
const CATEGORY_ICONS = {
	Fiction: "🌉",
	"Non-Fiction": "📰",
	"Sci-Fi": "👩🏻‍🚀",
	Mystery: "🔍",
	Biography: "🤵🏻‍♂️",
	Fantasy: "🧙",
	History: "☠️",
	"Self-Help": "❤️",
}

function Home() {
	// Pull all books from Redux; filter to popular ones for this page
	const books = useSelector((state) => state.books.list)
	const popularBooks = books.filter((b) => b.popular)

	return (
		<div className="bg-[#115e59]">
			{/* ── Hero ─────────────────────────────────────────────────── */}
			<section className="relative overflow-hidden text-center px-6 py-28">
				{/* Background glow blobs */}
				<div className="absolute inset-0 pointer-events-none">
					<div
						className="absolute top-[-20%] left-[30%] w-150 h-150
                          bg-indigo-600/20 rounded-full blur-[120px]"
					/>
					<div
						className="absolute bottom-[-10%] right-[20%] w-100 h-100
                          bg-violet-600/15 rounded-full blur-[100px]"
					/>
				</div>

				<div className="relative z-10 max-w-3xl mx-auto">
					{/* Pre-title badge */}
					<span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase">
						The Online Library
					</span>

					<h1
						className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
						style={{ fontFamily: "revert, 'DM Serif Display', serif" }}
					>
						Everything You Want
						<br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">
							To Read
						</span>
					</h1>

					<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
						Browse thousands of titles across every genre. Add your own picks
						and keep your collection in one beautiful place.
					</p>

					<Link
						to="/books"
						className="inline-block px-8 py-3.5 rounded-xl font-bold text-base bg-sky-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all duration-200"
					>
						Browse the Collection →
					</Link>
				</div>
			</section>

			{/* ── Categories ───────────────────────────────────────────── */}
			<section className="px-6 py-20 max-w-6xl mx-auto">
				<h2
					className="text-3xl font-bold text-white mb-1"
					style={{ fontFamily: "revert, 'DM Serif Display', serif" }}
				>
					Browse by Category
				</h2>
				<p className="text-slate-400 text-sm mb-8">
					Pick a genre and dive right in
				</p>

				<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
					{CATEGORIES.map((cat) => (
						<Link
							key={cat}
							to={`/books/${cat}`}
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#111118] border border-white/8 text-center hover:border-indigo-500/50 hover:bg-indigo-500/8 hover:-translate-y-1 transition-all duration-200"
						>
							<span className="text-2xl">{CATEGORY_ICONS[cat] || "📚"}</span>
							<span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
								{cat}
							</span>
						</Link>
					))}
				</div>
			</section>

			{/* ── Popular Books ─────────────────────────────────────────── */}
			<section className="px-6 py-20 bg-[#134e4a]">
				<div className="max-w-6xl mx-auto">
					<h2
						className="text-3xl font-bold text-white mb-1"
						style={{ fontFamily: "revert, 'DM Serif Display', serif" }}
					>
						Popular Books
					</h2>
					<p className="text-slate-300 text-sm mb-8">
						Staff picks and reader favourites
					</p>

					{/* Responsive grid of BookCards */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
						{popularBooks.map((book) => (
							<BookCard key={book.id} book={book} />
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
