import React, { useState, useEffect } from "react"
import cookie from "js-cookie"
import { useLanguage } from "../../Context/LanguageContext"
const Cookies = () => {
	const [showPopup, setShowPopup] = useState(false)
	const { t } = useLanguage()

	useEffect(() => {
		const cookieConsent = cookie.get("cookie_consent")
		if (!cookieConsent) {
			setShowPopup(true)
		}
	}, [])

	const handleCookieConsent = () => {
		cookie.set("cookie_consent", "true", { expires: 365 })
		setShowPopup(false)
	}

	return (
		showPopup && (
			<div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
				<div>{t("Cookies")}</div>
				<button
					onClick={handleCookieConsent}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					{t("CookiesAccept")}
				</button>
			</div>
		)
	)
}

export default Cookies
