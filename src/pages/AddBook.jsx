// ─── Add Book Page ────────────────────────────────────────────────────

import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addBook } from "../store/booksSlice"
import { CATEGORIES } from "../data/books"

// Generate a simple unique ID
const generateId = () =>
	`${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

const EMPTY_FORM = {
	title: "",
	author: "",
	category: "",
	description: "",
	rating: "",
}

function AddBook() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [form, setForm] = useState(EMPTY_FORM)
	const [errors, setErrors] = useState({})

	// Update one field and clear its error
	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: "" }))
	}

	// ── Validation ──────────────────────────────────────────────────────
	const validate = () => {
		const errs = {}
		if (!form.title.trim()) errs.title = "Title is required."
		if (!form.author.trim()) errs.author = "Author is required."
		if (!form.category) errs.category = "Please select a category."
		if (!form.description.trim()) errs.description = "Description is required."
		else if (form.description.trim().length < 20)
			errs.description = "Must be at least 20 characters."
		const r = parseFloat(form.rating)
		if (!form.rating) errs.rating = "Rating is required."
		else if (isNaN(r) || r < 1 || r > 5)
			errs.rating = "Must be a number between 1 and 5."
		return errs
	}

	// ── Submit ───────────────────────────────────────────────────────────
	const handleSubmit = (e) => {
		e.preventDefault()
		const validationErrors = validate()
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors)
			return
		}
		const newBook = {
			id: generateId(),
			title: form.title.trim(),
			author: form.author.trim(),
			category: form.category,
			description: form.description.trim(),
			rating: parseFloat(parseFloat(form.rating).toFixed(1)),
			cover: `https://placehold.co/150x220/1a1a24/6366f1?text=${encodeURIComponent(form.title)}`,
			popular: false,
		}
		dispatch(addBook(newBook)) // add to Redux (prepended to list)
		navigate(`/books/${form.category}`) // redirect to that category
	}

	// ── Shared input class builder ────────────────────────────────────
	const inputCls = (field) =>
		`w-full px-4 py-3 rounded-xl text-sm bg-[#0d0d14] text-white border transition-all duration-200 placeholder-slate-600 focus:outline-none focus:ring-2 ${
			errors[field]
				? "border-red-500/70 focus:ring-red-500/20"
				: "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20"
		}`

	return (
		<div className="bg-[#0a0a0f] min-h-screen px-6 py-12">
			<div className="max-w-xl mx-auto">
				{/* ── Header ───────────────────────────────────────────── */}
				<div className="mb-8">
					<h1
						className="text-4xl font-bold text-white mb-1"
						style={{ fontFamily: "'DM Serif Display', serif" }}
					>
						Add a New Book
					</h1>
					<p className="text-slate-500 text-sm">
						Fill in the details below to add a book to the library.
					</p>
				</div>

				{/* ── Form ─────────────────────────────────────────────── */}
				<form
					onSubmit={handleSubmit}
					noValidate
					className="bg-[#111118] border border-white/8 rounded-2xl p-8 shadow-2xl shadow-black/60 flex flex-col gap-5"
				>
					{/* Title */}
					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-bold text-slate-400 tracking-widest uppercase">
							Book Title *
						</label>
						<input
							type="text"
							name="title"
							placeholder="e.g. The Great Gatsby"
							value={form.title}
							onChange={handleChange}
							className={inputCls("title")}
						/>
						{errors.title && (
							<p className="text-red-400 text-xs font-semibold">
								{errors.title}
							</p>
						)}
					</div>

					{/* Author */}
					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-bold text-slate-400 tracking-widest uppercase">
							Author *
						</label>
						<input
							type="text"
							name="author"
							placeholder="e.g. F. Scott Fitzgerald"
							value={form.author}
							onChange={handleChange}
							className={inputCls("author")}
						/>
						{errors.author && (
							<p className="text-red-400 text-xs font-semibold">
								{errors.author}
							</p>
						)}
					</div>

					{/* Category */}
					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-bold text-slate-400 tracking-widest uppercase">
							Category *
						</label>
						<select
							name="category"
							value={form.category}
							onChange={handleChange}
							className={inputCls("category") + " cursor-pointer"}
						>
							<option value="">— Select a category —</option>
							{CATEGORIES.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
						{errors.category && (
							<p className="text-red-400 text-xs font-semibold">
								{errors.category}
							</p>
						)}
					</div>

					{/* Rating */}
					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-bold text-slate-400 tracking-widest uppercase">
							Rating (1 – 5) *
						</label>
						<input
							type="number"
							name="rating"
							placeholder="e.g. 4.5"
							min="1"
							max="5"
							step="0.1"
							value={form.rating}
							onChange={handleChange}
							className={inputCls("rating")}
						/>
						{errors.rating && (
							<p className="text-red-400 text-xs font-semibold">
								{errors.rating}
							</p>
						)}
					</div>

					{/* Description */}
					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-bold text-slate-400 tracking-widest uppercase">
							Description *
						</label>
						<textarea
							name="description"
							rows={5}
							placeholder="Write a short description (at least 20 characters)..."
							value={form.description}
							onChange={handleChange}
							className={inputCls("description") + " resize-y min-h-30"}
						/>
						{errors.description && (
							<p className="text-red-400 text-xs font-semibold">
								{errors.description}
							</p>
						)}
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all duration-200 mt-2"
					>
						Add Book to Library
					</button>
				</form>
			</div>
		</div>
	)
}

export default AddBook
