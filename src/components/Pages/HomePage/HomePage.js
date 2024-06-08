import React from "react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"
import Footer from "../../Footer/Footer"
import Cookies from "../../Cookies/Cookies"
const HomePage = () => {
	return (
		<>
			<div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
				<div className="max-w-2xl mx-auto p-4 m-4">
					<div className="flex p-4 m-4">
						<h1 className="relative z-20 text-4xl md:text-7xl  py-4  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300  text-center font-sans font-bold">
							Filip Sapiejewski
						</h1>
					</div>
					<Cookies />
				</div>
				<BackgroundBeams />
			</div>
			{/* <Footer /> */}
		</>
	)
}

export default HomePage
