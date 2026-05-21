// ─── Browse Books Page ────────────────────────────────────────────────

import { useState, useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { CATEGORIES } from "../data/books"
import BookCard from "../components/BookCard"

function BrowseBooks() {
	const { category } = useParams() // from URL
	const [searchQuery, setSearchQuery] = useState("") // search input state

	// Read books list from Redux store
	const books = useSelector((state) => state.books.list)

	// Derive filtered list — reruns only when deps change
	const filteredBooks = useMemo(() => {
		let result = books

		// Filter by category if one is set in the URL
		if (category) {
			result = result.filter(
				(b) => b.category.toLowerCase() === category.toLowerCase(),
			)
		}

		// Filter by search term (title OR author, case-insensitive)
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase()
			result = result.filter(
				(b) =>
					b.title.toLowerCase().includes(q) ||
					b.author.toLowerCase().includes(q),
			)
		}

		return result
	}, [books, category, searchQuery])

	return (
		<div className="bg-[#0a0a0f] min-h-screen px-6 py-12">
			<div className="max-w-6xl mx-auto">
				{/* ── Page Header ──────────────────────────────────────── */}
				<div className="mb-8">
					<h1
						className="text-4xl font-bold text-white mb-1"
						style={{ fontFamily: "'DM Serif Display', serif" }}
					>
						{category ? `${category}` : "All Books"}
					</h1>
					<p className="text-slate-500 text-sm">
						{filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}{" "}
						found
					</p>
				</div>

				{/* ── Search Bar ───────────────────────────────────────── */}
				<div className="mb-6">
					<input
						type="text"
						placeholder="🔍  Search by title or author..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						aria-label="Search books"
						className="w-full max-w-md px-5 py-3 rounded-xl text-sm bg-[#111118] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
					/>
				</div>

				{/* ── Category Filter Pills ────────────────────────────── */}
				<div className="flex flex-wrap gap-2 mb-10">
					{/* "All" pill */}
					<Link
						to="/books"
						className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider
                        uppercase border transition-all duration-150
                        ${
													!category
														? "bg-indigo-600 border-indigo-600 text-white"
														: "bg-transparent border-white/10 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-400"
												}`}
					>
						All
					</Link>

					{CATEGORIES.map((cat) => (
						<Link
							key={cat}
							to={`/books/${cat}`}
							className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider
                          uppercase border transition-all duration-150
                          ${
														category === cat
															? "bg-indigo-600 border-indigo-600 text-white"
															: "bg-transparent border-white/10 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-400"
													}`}
						>
							{cat}
						</Link>
					))}
				</div>

				{/* ── Books Grid or Empty State ─────────────────────────── */}
				{filteredBooks.length > 0 ? (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
						{filteredBooks.map((book) => (
							<BookCard key={book.id} book={book} />
						))}
					</div>
				) : (
					<div className="text-center py-24">
						<p className="text-5xl mb-4">📭</p>
						<h3
							className="text-xl font-semibold text-white mb-2"
							style={{ fontFamily: "'DM Serif Display', serif" }}
						>
							No books found
						</h3>
						<p className="text-slate-500 text-sm">
							Try a different search term or select another category.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default BrowseBooks
