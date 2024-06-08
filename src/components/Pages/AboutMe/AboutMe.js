import React from "react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"
import { useLanguage } from "../../../Context/LanguageContext"

const AboutMe = () => {
	const { t } = useLanguage()
	return (
		<>
			<div className="h-screen w-full z-10 rounded-md  relative pt-30 flex flex-col items-center justify-center antialiased">
				<section className="pt-48 sm:pt-32 mb-10 bg-transparent z-30">
					<div className="mx-auto px-4 z-40">
						<div className="flex flex-col lg:flex-row items-center justify-center">
							<div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
								<h2 className="text-3xl text-white font-bold mb-4">
									{t("AboutMeP1")}
								</h2>
								<p className="text-white leading-relaxed text-wrap">
									{t("AboutMeP2")}
								</p>
								<p className="text-white leading-relaxed mt-4">
									{t("AboutMeP3")}
								</p>
								<p className="text-white leading-relaxed mt-4">
									{t("AboutMeP4")}
								</p>
								<div className="text-white leading-relaxed mt-4">
									{t("AboutMeUI")}
									<ul>
										<li>{t("AboutMeLI1")}</li>
										<li>{t("AboutMeLI2")}</li>
										<li>{t("AboutMeLI3")}</li>
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
