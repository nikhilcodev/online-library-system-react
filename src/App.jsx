// ─── App Component ───────────────────────────────────────────────────

import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import BrowseBooks from "./pages/BrowseBooks"
import BookDetails from "./pages/BookDetails"
import AddBook from "./pages/AddBook"
import NotFound from "./pages/NotFound"

function App() {
	return (
		<Routes>
			{/* All main pages share the Layout (includes Navbar) */}
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<BrowseBooks />} />
				<Route path="/books/:category" element={<BrowseBooks />} />
				<Route path="/book/:id" element={<BookDetails />} />
				<Route path="/add" element={<AddBook />} />
			</Route>

			{/* 404 — rendered WITHOUT the Layout so Navbar is hidden */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default App
