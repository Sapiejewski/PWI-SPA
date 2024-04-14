import React from "react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"

const AboutMe = () => {
	return (
		<>
			<div className="h-screen w-full z-10 rounded-md  relative pt-30 flex flex-col items-center justify-center antialiased">
				<section className="pt-48 sm:pt-32 mb-10 bg-transparent z-30">
					<div className="mx-auto px-4 z-40">
						<div className="flex flex-col lg:flex-row items-center justify-center">
							<div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
								<h2 className="text-3xl text-white font-bold mb-4">About Me</h2>
								<p className="text-white leading-relaxed text-wrap">
									Hi there! My name is Filip, and I'm a passionate computer
									science student at SGGW in Warsaw, Poland. When I'm not
									hitting the books or coding away, you can find me curled up
									with a good book or exploring the latest films.
								</p>
								<p className="text-white leading-relaxed mt-4">
									Professionally, I'm a full-stack Next.js developer at KNF,
									where I get to leverage my skills to build innovative and
									user-friendly applications. I thrive in a collaborative
									environment and I'm always eager to learn and grow as a
									developer.
								</p>
								<p className="text-white leading-relaxed mt-4">
									This portfolio showcases some of my projects that I'm most
									proud of. Feel free to take a look around and get a sense of
									my work style and interests. If you have any questions or
									projects in mind, don't hesitate to reach out!
								</p>
								<div className="text-white leading-relaxed mt-4">
									Here's a quick snapshot of me:
									<ul>
										<li>Student: SGGW, Warsaw (Computer Science)</li>
										<li>Profession: Full-Stack Next.js Developer at KNF</li>
										<li>Interests: Reading, Film, Technology</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<BackgroundBeams />
			</div>
		</>
	)
}

export default AboutMe
