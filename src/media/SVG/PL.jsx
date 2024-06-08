import React from "react"
import { useLanguage } from "../../Context/LanguageContext"


const PL = () => {
	const {changeLanguage } = useLanguage()
	return (
		<button onClick={ ()=>changeLanguage("pl")}>
			<svg viewBox="0 -4 28 28" className="w-6 h-6 ">
				<g clipPath="url(#clip0_503_4159)">
					<rect
						x="0.25"
						y="0.25"
						width="27.5"
						height="19.5"
						rx="1.75"
						fill="white"
						stroke="#F5F5F5"
						strokeWidth="0.5"
					/>
					<mask
						id="mask0_503_4159"
						maskType="alpha"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="28"
						height="20">
						<rect
							x="0.25"
							y="0.25"
							width="27.5"
							height="19.5"
							rx="1.75"
							fill="white"
							stroke="white"
							strokeWidth="0.5"
						/>
					</mask>
					<g mask="url(#mask0_503_4159)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 20H28V9.33333H0V20Z"
							fill="#EB2A50"
						/>
					</g>
				</g>
				<defs>
					<clipPath id="clip0_503_4159">
						<rect width="28" height="20" rx="2" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</button>
	)
}

export default PL
