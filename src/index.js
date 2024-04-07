import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { sendToVercelAnalytics } from "./vitals"
import Layout from "./components/Layout/Layout"

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

ReactDOM.render(
	<Layout>
		<App />
	</Layout>,
	document.getElementById("root")
)

reportWebVitals(sendToVercelAnalytics)
