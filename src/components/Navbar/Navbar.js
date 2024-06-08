import React, { useContext, useState, Fragment } from "react"
import { Dialog, Tab, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { LayoutContext } from "../Layout/Layout"
import LanguageFlag from "../LanguageFlag/LanguageFlag"
import { useLanguage } from "../../Context/LanguageContext"

const Navbar = () => {
	const { t } = useLanguage()
	const [open, setOpen] = useState(false)
	// const [currPage, setCurrPage] = useContext(LayoutContext);

	return (
		<div className="absolute bg-transparent w-9/12 z-50 items-start justify-start">
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full">
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
								<div className="flex px-4 pb-2 pt-5">
									<button
										type="button"
										className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
										onClick={() => setOpen(false)}>
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<Tab.Group as="div" className="mt-2">
									<div className="">
										<Tab.List className="mb-px flex flex-col space-y-4 px-4">
											<MenuItem
												item={t("NavbarItem1")}
												setOpen={setOpen}
												href="Home"
											/>
											<MenuItem
												item={t("NavbarItem2")}
												setOpen={setOpen}
												href="Projects"
											/>
											<MenuItem
												item={t("NavbarItem3")}
												setOpen={setOpen}
												href="Experience"
											/>
											<MenuItem
												item={t("NavbarItem4")}
												setOpen={setOpen}
												href="About Me"
											/>
											<LanguageFlag />
										</Tab.List>
									</div>
									<Tab.Panels as={Fragment}></Tab.Panels>
								</Tab.Group>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
			<button
				type="button"
				className="flex rounded-md w-screen bg-black p-2 text-white lg:hidden"
				onClick={() => setOpen(true)}>
				<span className="absolute -inset-0.5" />
				<span className="sr-only">Open menu</span>
				<Bars3Icon className="h-6 w-6" aria-hidden="true" />
			</button>
			<header className="hidden w-full lg:flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.4)]">
				<nav
					aria-label="Top"
					className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<div className="flex justify-center items-center">
						<div className="flex h-16 justify-between">
							<div className="flex h-full w-full gap-x-8 xl:gap-x-12 items-center justify-center">
								<MenuItem
									item={t("NavbarItem1")}
									setOpen={setOpen}
									href="Home"
								/>
								<MenuItem
									item={t("NavbarItem2")}
									setOpen={setOpen}
									href="Projects"
								/>
								<MenuItem
									item={t("NavbarItem3")}
									setOpen={setOpen}
									href="Experience"
								/>
								<MenuItem
									item={t("NavbarItem4")}
									setOpen={setOpen}
									href="About Me"
								/>
								<LanguageFlag />
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Navbar

function MenuItem({ item, setOpen, href }) {
	const { setCurrPage } = useContext(LayoutContext)

	return (
		<div
			onClick={() => {
				setCurrPage(href)
				setOpen(false)
			}}
			className="flex justify-center items-center">
			<p className="text-center cursor-pointer text-white hover:opacity-90 text-lg md:text-2xl dark:text-white">
				{item}
			</p>
		</div>
	)
}
