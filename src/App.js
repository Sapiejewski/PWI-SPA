import "./App.css"
import HomePage from "./components/Pages/HomePage/HomePage"
import { LayoutContext } from "./components/Layout/Layout"
import { useContext, useEffect } from "react"
import CV from "./components/Pages/CV/CV"
function App() {
	const { currPage, setCurrPage } = useContext(LayoutContext)
	useEffect(() => {
		console.log(currPage)
	}, [currPage])
	if (currPage === "HomePage") return <HomePage />
	if (currPage === "CV") return <CV />
}

export default App
