import React from "react"
import PL from "../../media/SVG/PL"
import EN from "../../media/SVG/EN"
import { useLanguage } from "../../Context/LanguageContext"
const LanguageFlag = () => {
	const { language } = useLanguage()
	return (
		<div>
			<div className="flex h-full w-full justify-center items-center">
				{language === "pl" ? <EN /> : <PL />}
			</div>
		</div>
	)
}

export default LanguageFlag
