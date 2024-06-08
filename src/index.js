import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { sendToVercelAnalytics } from "./vitals"
import Layout from "./components/Layout/Layout"
import "./i18n"
import { LanguageProvider } from "./Context/LanguageContext"
;<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

ReactDOM.render(
	<Suspense>
		<LanguageProvider>
			<Layout>
				<App />
			</Layout>
		</LanguageProvider>
	</Suspense>,
	document.getElementById("root")
)

reportWebVitals(sendToVercelAnalytics)
