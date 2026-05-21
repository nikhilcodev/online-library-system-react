// ─── Book Details Page ───────────────────────────────────────────────

import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

// Star rating display component
function StarRating({ rating }) {
	const full = Math.floor(rating)
	const half = rating % 1 >= 0.5
	const empty = 5 - full - (half ? 1 : 0)

	return (
		<span
			className="flex items-center gap-1 text-xl"
			aria-label={`${rating} out of 5`}
		>
			{"★"
				.repeat(full)
				.split("")
				.map((_, i) => (
					<span key={`f${i}`} className="star-filled">
						★
					</span>
				))}
			{half && <span className="star-filled text-base">½</span>}
			{"☆"
				.repeat(empty)
				.split("")
				.map((_, i) => (
					<span key={`e${i}`} className="star-empty">
						☆
					</span>
				))}
			<span className="ml-2 text-slate-400 text-sm font-medium">
				{rating} / 5
			</span>
		</span>
	)
}

function BookDetails() {
	const { id } = useParams()
	const navigate = useNavigate()

	// Find the book in Redux store by ID
	const book = useSelector((state) => state.books.list.find((b) => b.id === id))

	// Book not found — show fallback
	if (!book) {
		return (
			<div className="bg-[#0a0a0f] min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
				<span className="text-5xl">🔍</span>
				<h2
					className="text-2xl font-bold text-white"
					style={{ fontFamily: "'DM Serif Display', serif" }}
				>
					Book not found
				</h2>
				<p className="text-slate-500 text-sm">No book exists with that ID.</p>
				<button
					onClick={() => navigate("/books")}
					className="mt-2 px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors"
				>
					← Back to Browse
				</button>
			</div>
		)
	}

	return (
		<div className="bg-[#0a0a0f] min-h-screen px-6 py-12">
			<div className="max-w-4xl mx-auto">
				{/* ── Back Button ──────────────────────────────────────── */}
				<button
					onClick={() => navigate(-1)}
					className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors duration-200"
				>
					← Back to Browse
				</button>

				{/* ── Detail Card ──────────────────────────────────────── */}
				<div
					className="flex flex-col sm:flex-row gap-10
                        bg-[#111118] border border-white/8 rounded-2xl p-8
                        shadow-2xl shadow-black/60"
				>
					{/* Cover */}
					<div className="shrink-0 w-48 mx-auto sm:mx-0">
						<img
							src={book.cover}
							alt={`Cover of ${book.title}`}
							className="w-full rounded-xl shadow-2xl shadow-black/60"
							onError={(e) => {
								e.target.src =
									"https://placehold.co/200x300/1a1a24/6366f1?text=No+Cover"
							}}
						/>
					</div>

					{/* Info */}
					<div className="flex-1">
						{/* Category badge */}
						<span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 text-[0.65rem] font-bold tracking-widest uppercase">
							{book.category}
						</span>

						{/* Title */}
						<h1
							className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight"
							style={{ fontFamily: "'DM Serif Display', serif" }}
						>
							{book.title}
						</h1>

						{/* Author */}
						<p className="text-slate-400 text-base mb-5">by {book.author}</p>

						{/* Rating */}
						<div className="mb-6">
							<StarRating rating={book.rating} />
						</div>

						{/* Divider */}
						<div className="border-t border-white/8 mb-6" />

						{/* Description */}
						<div>
							<h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">
								About this book
							</h3>
							<p className="text-slate-300 leading-relaxed text-[0.95rem]">
								{book.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookDetails
