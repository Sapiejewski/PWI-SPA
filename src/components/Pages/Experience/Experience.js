import React from "react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"

const Experience = () => {
	return (
		<div className="h-auto 2xl:h-screen w-full z-10 rounded-md  relative pt-30 flex flex-col items-center justify-center antialiased">
			<section className="pt-48 sm:pt-32 mb-10  bg-transparent z-30">
				<div className="mx-auto px-4 z-40">
					<div className="flex flex-col lg:flex-row items-center justify-center">
						<div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
							<h2 className="text-3xl text-white font-bald mb-4">Experience</h2>
							<p className="text-white text-lg font-bald leading-relaxed text-wrap pb-3">
								KNF Next.js Fullstack developer
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									Projektowanie i wdrożenie systemu do obsługi wniosków o
									licencję na działalność w kryptowalutach, opartej na Next.js
									14, z bazą danych MongoDB. Zapewnianie zgodności systemu z
									wymogami prawnymi i biznesowymi.
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									Tworzenie systemu do wykrywania fałszywych ogłoszeń na
									portalach ogłoszeniowych przy użyciu Pythona i bibliotek ML:
									pandas, scikit-learn. Stworzenie aplikacji webowej w Next.js
									do prezentacji wyników modelu.
								</li>
							</ul>

							<p className="text-white text-lg font-bald leading-relaxed text-wrap pt-6 pb-3">
								Together Reasercher UX/UI
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									Przeprowadzenie benchmarkingu banków w zakresie oferty
									bankowości korporacyjnej.
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									Analiza funkcjonalności stron internetowych.
								</li>
							</ul>
							<p className="text-white text-lg font-bald leading-relaxed text-wrap pt-6 pb-3">
								PZU Konsultant
							</p>
							<ul className="text-white text-lg leading-relaxed text-wrap">
								<li className="text-white text-lg leading-relaxed text-wrap">
									Obsługa klientów infolinii.
								</li>
								<li className="text-white text-lg leading-relaxed text-wrap">
									Pomoc klientom w zgłaszaniu roszczeń o odszkodowanie.{" "}
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
