import React from "react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"
import { useLanguage } from "../../../Context/LanguageContext"

const Experience = () => {
	const { t } = useLanguage()
	return (
		<div className="h-screen w-full z-10 rounded-md relative pt-30 flex flex-col items-center justify-center antialiased">
			<section className="pt-48 sm:pt-32 mb-10  bg-transparent z-30">
				<div className="mx-auto px-4 z-40">
					<div className="flex flex-col lg:flex-row items-center justify-center">
						<div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
							<h2 className="text-3xl text-white font-bold mb-4">
								{t("ExperienceP1")}
							</h2>
							<p className="text-white text-xl font-bald leading-relaxed text-wrap pb-3">
								{t("ExperienceP2")}
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									{t("ExperienceP3")}
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									{t("ExperienceP4")}
								</li>
							</ul>

							<p className="text-white text-lg font-bald leading-relaxed text-wrap pt-6 pb-3">
								{t("ExperienceP5")}{" "}
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									{t("ExperienceP6")}
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									{t("ExperienceP7")}{" "}
								</li>
							</ul>
							<p className="text-white text-xl font-bald leading-relaxed text-wrap pt-6 pb-3">
								{t("ExperienceP8")}{" "}
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									{t("ExperienceP9")}{" "}
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									{t("ExperienceP10")}{" "}
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
