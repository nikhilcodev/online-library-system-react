// ─── App Entry Point ─────────────────────────────────────────────────

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter
				future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
			>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/sw.js")
			.then((reg) => console.log("[SW] Registered:", reg.scope))
			.catch((err) => console.warn("[SW] Registration failed:", err))
	})
}
