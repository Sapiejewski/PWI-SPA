import "./App.css"
import HomePage from "./components/Pages/HomePage/HomePage"
import { LayoutContext } from "./components/Layout/Layout"
import { useContext, useEffect } from "react"
import Projects from "./components/Pages/Projects/Projects"
import AboutMe from "./components/Pages/AboutMe/AboutMe"
import Experience from "./components/Pages/Experience/Experience"
function App() {
	const { currPage } = useContext(LayoutContext)
	useEffect(() => {
		console.log(currPage)
	}, [currPage])
	if (currPage === "Home") return <HomePage />
	// if (currPage === "CV") return <CV />
	if (currPage === "Projects") return <Projects />
	if (currPage === "About Me") return <AboutMe />
	if (currPage === "Experience") return <Experience />
}

export default App
