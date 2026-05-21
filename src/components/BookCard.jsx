// ─── BookCard Component ───────────────────────────────────────────────

import { Link } from "react-router-dom"

// Build an array of filled / empty star characters based on numeric rating
function StarRating({ rating }) {
	const full = Math.floor(rating)
	const half = rating % 1 >= 0.5
	const empty = 5 - full - (half ? 1 : 0)

	return (
		<span
			className="flex items-center gap-0.5 text-sm"
			aria-label={`${rating} out of 5 stars`}
		>
			{"★"
				.repeat(full)
				.split("")
				.map((s, i) => (
					<span key={`f${i}`} className="star-filled">
						{s}
					</span>
				))}
			{half && <span className="star-filled text-xs">½</span>}
			{"☆"
				.repeat(empty)
				.split("")
				.map((s, i) => (
					<span key={`e${i}`} className="star-empty">
						{s}
					</span>
				))}
			<span className="ml-1 text-slate-500 text-xs">({rating})</span>
		</span>
	)
}

function BookCard({ book }) {
	return (
		<div className="book-card-hover flex flex-col rounded-2xl overflow-hidden bg-[#111118] border border-white/8 hover:border-indigo-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-250">
			{/* Cover Image */}
			<div className="overflow-hidden h-56 bg-[#1a1a24]">
				<img
					src={book.cover}
					alt={`Cover of ${book.title}`}
					className="book-cover-img w-full h-full object-cover"
					onError={(e) => {
						e.target.src =
							"https://placehold.co/150x220/1a1a24/6366f1?text=No+Cover"
					}}
				/>
			</div>

			{/* Card Body */}
			<div className="flex flex-col flex-1 gap-2 p-4">
				{/* Category Badge */}
				<span className="self-start px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 text-[0.65rem] font-bold tracking-widest uppercase">
					{book.category}
				</span>

				{/* Title */}
				<h3
					className="text-white font-semibold text-sm leading-snug line-clamp-2"
					style={{ fontFamily: "'DM Serif Display', serif" }}
				>
					{book.title}
				</h3>

				{/* Author */}
				<p className="text-slate-500 text-xs">by {book.author}</p>

				{/* Stars */}
				<StarRating rating={book.rating} />

				{/* View Details — pushed to bottom */}
				<Link
					to={`/book/${book.id}`}
					className="mt-auto block text-center py-2 rounded-lg text-sm font-semibold bg-sky-600 text-white hover:bg-sky-500 transition-colors duration-200"
				>
					View Details
				</Link>
			</div>
		</div>
	)
}

export default BookCard
