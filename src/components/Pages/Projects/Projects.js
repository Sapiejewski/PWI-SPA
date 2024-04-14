import React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
	IconArrowWaveRightUp,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react"
import { BackgroundBeams } from "../../Background/BackgroundBeams"
import TripSplit from "./TripSplit"
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

const Projects = () => {
	return (
		<>
			<div className="h-full w-full z-10 flex flex-col items-center pt-32 justify-center antialiased bg-cyan-950 py-10">
				<div className="max-w-4xl z-20 mx-auto md:overflow-y-auto grid md:grid-cols-3 gap-4">
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							header={item.header}
							icon={item.icon}
							href={item.href}
							className={i === 3 || i === 6 ? "md:col-span-2" : ""}
						/>
					))}
				</div>
				<BackgroundBeams />
			</div>
		</>
	)
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)
export default Projects
export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}>
			{children}
		</div>
	)
}
const items = [
	{
		title: "Diabetes Prediction",
		description:
			"Predict the diabetes based on basic physical and lifestyle data",
		header: (
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-b from-indigo-400  to-yellow-300"></div>
		),
		href: "https://github.com/Sapiejewski/Diabetes-prediction",
		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "TicTacToe",
		description:
			"Basic TicTacToe game with option to play with computer or other player",
		header: (
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-blue-300 via-blue-200 to-orange-200"></div>
		),
		href: "https://github.com/Sapiejewski/tic-tac-toe",
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "PDF exporter",
		description: "Desktop Python app to export data from excel columns to pdf",
		header: (
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600"></div>
		),
		href: "https://github.com/Sapiejewski/PDF-and-Excel-Export-App",
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "TripSplit",
		description: "App to split your trip bills equaly",
		header: <TripSplit />,
		href: "https://github.com/Sapiejewski/Trip-split",
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Portfolio Website",
		description: "Potfolio website with all my experience and projects",
		header: (
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-gradient-to-r from-pink-500 to-orange-500"></div>
		),
		href: "https://github.com/Sapiejewski/PWI-SPA",
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
]

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	href,
}) => {
	return (
		<a
			rel="noopener noreferrer"
			target="_blank"
			href={href}
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-[rgba(0,0,0,0.2)] border border-transparent justify-between flex flex-col space-y-4",
				className
			)}>
			{header}
			<div className="group-hover/bento:translate-x-2 transition duration-200">
				{icon}
				<div className="font-sans font-bold text-white dark:text-neutral-200 mb-2 mt-2">
					{title}
				</div>
				<div className="font-sans font-normal text-white text-xs dark:text-neutral-300">
					{description}
				</div>
			</div>
		</a>
	)
}
