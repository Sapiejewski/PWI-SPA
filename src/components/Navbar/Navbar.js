import React, { useContext, useState } from "react"
import { motion } from "framer-motion"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { LayoutContext } from "../Layout/Layout"

const transition = {
	type: "spring",
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
}
function cn(...inputs) {
	return twMerge(clsx(inputs))
}

const MenuItem = ({ setActive, active, item, children, isItem, href }) => {
	const { currPage, setCurrPage } = useContext(LayoutContext)

	return (
		<div
			onMouseEnter={() => {
				if (isItem === "true") {
					setActive(item)
				}
			}}
			onClick={() => setCurrPage(href)}
			className="relative ">
			<motion.p
				transition={{ duration: 0.3 }}
				className="cursor-pointer text-xl md:text-md text-black hover:opacity-[0.9] dark:text-white">
				{item}
			</motion.p>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}>
					{active === item && (
						<div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
							<motion.div
								transition={transition}
								layoutId="active" // layoutId ensures smooth animation
								className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
								<motion.div
									layout // layout ensures smooth animation
									className="w-max h-full p-4 text-nowrap">
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

const Menu = ({ setActive, children }) => {
	const { isMenuOpen, setIsMenuOpen } = useContext(LayoutContext)

	return (
		<nav
			onMouseLeave={() => setActive(null)}
			className="relative rounded-full boder borsder-transparent dark:bg-slate-900 dark:border-white/[0.2] bg-white shadow-input flex justify-around items-center space-x-4 px-5 py-6 ">
			{children}
		</nav>
	)
}

const ProductItem = ({ title, description, href, src }) => {
	return (
		<a href={href} className="flex space-x-2">
			<img
				src={src}
				width={140}
				height={70}
				alt={title}
				className="flex-shrink-0 rounded-md shadow-2xl"
			/>
			<div>
				<h4 className="text-xl font-bold mb-1 text-black dark:text-white">
					{title}
				</h4>
				<p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
					{description}
				</p>
			</div>
		</a>
	)
}

const Hovereda = ({ children, ...rest }) => {
	return (
		<a
			{...rest}
			className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
			{children}
		</a>
	)
}

export const HoveredLink = ({ children, href, ...rest }) => {
	return (
		<a
			{...rest}
			className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
			{children}
		</a>
	)
}

export default function Navbar({ className }) {
	const [active, setActive] = useState()
	return (
		<div
			className={cn(
				"fixed top-10 inset-x-0 max-w-5xl sm:max-w-2xl hover:max-w-5xl   ease-in-out delay-150 mx-auto z-50 transition-all duration-300",
				className
			)}>
			<Menu setActive={setActive}>
				<MenuItem
					setActive={setActive}
					active={active}
					isItem={"false"}
					item="Home"
					href={"HomePage"}></MenuItem>
				<MenuItem
					isItem={"true"}
					setActive={setActive}
					active={active}
					item="Projects">
					<div className="  text-sm grid grid-cols-2 gap-10 p-4">
						<ProductItem
							title="Algochurn"
							href="https://algochurn.com"
							src="https://assets.aceternity.com/demos/algochurn.webp"
							description="Prepare for tech interviews like never before."
						/>
						<ProductItem
							title="Tailwind Master Kit"
							href="https://tailwindmasterkit.com"
							src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
							description="Production ready Tailwind css components for your next project"
						/>
						<ProductItem
							title="Moonbeam"
							href="https://gomoonbeam.com"
							src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
							description="Never write from scratch again. Go from idea to blog in minutes."
						/>
						<ProductItem
							title="Rogue"
							href="https://userogue.com"
							src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
							description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
						/>
					</div>
				</MenuItem>
				<MenuItem
					isItem={"false"}
					setActive={setActive}
					active={active}
					item="CV"
					href={"CV"}>
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev"></HoveredLink>
						<HoveredLink href="/interface-design">Interface Design</HoveredLink>
						<HoveredLink href="/CV"></HoveredLink>
						<HoveredLink href="/Projects">Projects</HoveredLink>
						<HoveredLink href="/Aboutme">About Me</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem
					isItem={"true"}
					setActive={setActive}
					active={active}
					item="About Me">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/hobby">Hobby</HoveredLink>
						<HoveredLink href="/individual">Experience</HoveredLink>
						<HoveredLink href="/team">Education</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Contact">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/hobby">LinkedIn</HoveredLink>
						<HoveredLink href="/individual">Github</HoveredLink>
						<HoveredLink href="/individual">Email</HoveredLink>
					</div>
				</MenuItem>
			</Menu>
		</div>
	)
}
