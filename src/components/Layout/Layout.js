import Navbar from "../Navbar/Navbar"
import React, { useState } from "react"
export const LayoutContext = React.createContext()

const Layout = ({ children }) => {
	const [currPage, setCurrPage] = useState("Home")
	return (
		<LayoutContext.Provider value={{ currPage, setCurrPage }}>
			<div>
				<div className="w-full h-full flex flex-row justify-start items-start lg:justify-center ">
					<Navbar />
				</div>
				{children}
			</div>
		</LayoutContext.Provider>
	)
}

export default Layout
