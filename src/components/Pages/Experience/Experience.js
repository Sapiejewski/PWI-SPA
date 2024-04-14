import React from "react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"

const Experience = () => {
	return (
		<div className="h-screen  w-full z-10 rounded-md  relative pt-30 flex flex-col items-center justify-center antialiased">
			<section className="pt-48 sm:pt-32 mb-10  bg-transparent z-30">
				<div className="mx-auto px-4 z-40">
					<div className="flex flex-col lg:flex-row items-center justify-center">
						<div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
							<h2 className="text-3xl text-white font-bold mb-4">Experience</h2>
							<p className="text-white text-xl font-bald leading-relaxed text-wrap pb-3">
								KNF Next.js Fullstack developer
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									Design and implementation of a cryptocurrency license
									application system based on Next.js 14 with a MongoDB
									database. Ensuring system compliance with legal and business
									requirements.
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									Development of a system for detecting fake ads on classifieds
									portals using Python and ML libraries: pandas, scikit-learn.
									Creation of a web application in Next.js to present the
									results of the model.
								</li>
							</ul>

							<p className="text-white text-lg font-bald leading-relaxed text-wrap pt-6 pb-3">
								Together Reasercher UX/UI
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									Benchmarking of banks in terms of their corporate banking
									offer.
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									Website Functionality Analysis
								</li>
							</ul>
							<p className="text-white text-lg font-bald leading-relaxed text-wrap pt-6 pb-3">
								PZU Consultant
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									Customer Service Hotline Support
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									Assisting clients with filing compensation claims.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<BackgroundBeams />
		</div>
	)
}

export default Experience
