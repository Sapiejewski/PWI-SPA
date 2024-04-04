import Navbar from "../Navbar/Navbar"
import React, { useState } from "react"
export const LayoutContext = React.createContext()

const Layout = ({ children }) => {
	const [currPage, setCurrPage] = useState("HomePage")
	return (
		<LayoutContext.Provider value={{ currPage, setCurrPage }}>
			<div>
				<div className="relative w-full h-full flex items-center justify-center">
					<Navbar className="top-2" />
				</div>
				{children}
			</div>
		</LayoutContext.Provider>
	)
}

export default Layout
