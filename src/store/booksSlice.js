// ─── Books Slice ─────────────────────────────────────────────────────

import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_BOOKS } from "../data/books"

const booksSlice = createSlice({
	name: "books",
	initialState: {
		list: INITIAL_BOOKS,
	},
	reducers: {
		// Adds a new book to the BEGINNING of the list
		addBook: (state, action) => {
			state.list.unshift(action.payload)
		},
	},
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
