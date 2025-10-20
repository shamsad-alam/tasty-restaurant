// Navbar.jsx
import { useState } from "react";
// import { GiForkKnife } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";

const navLinks = [
    { label: "Home", hasMenu: true },
    { label: "About Us" },
    { label: "Services" },
    { label: "Menu" },
    { label: "Pages", hasMenu: true },
    { label: "Contact Us" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDrop, setOpenDrop] = useState(null);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-linear-to-b from-red-500 to-red-700">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                        <span className="text-yellow-300 font-bold text-[26px]">T</span>asty <span className="text-yellow-300 font-bold text-[26px]">E</span>xpress
                    </h3>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden items-center gap-8 text-sm text-white/90 md:flex">
                    {navLinks.map((item, idx) => (
                        <li key={item.label} className="relative">
                            <button
                                className="flex items-center gap-1 transition font-bold hover:text-white"
                                onMouseEnter={() => setOpenDrop(item.hasMenu ? item.label : null)}
                                onMouseLeave={() => setOpenDrop(null)}
                            >
                                <span>{item.label}</span>
                                {item.hasMenu && (
                                    <FiChevronDown className=" h-4 w-4 opacity-80" />
                                )}
                            </button>

                            {/* Simple hover dropdown placeholder */}
                            {item.hasMenu && openDrop === item.label && (
                                <div
                                    onMouseEnter={() => setOpenDrop(item.label)}
                                    onMouseLeave={() => setOpenDrop(null)}
                                    className="absolute left-0 mt-3 w-44 rounded-md border border-white/10 bg-neutral-900/90 p-2 shadow-lg backdrop-blur"
                                >
                                    <a href="#" className="block rounded px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                                        Option 1
                                    </a>
                                    <a href="#" className="block rounded px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                                        Option 2
                                    </a>
                                    <a href="#" className="block rounded px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                                        Option 3
                                    </a>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#"
                    className="hidden items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold
                     text-black transition hover:opacity-90 md:inline-flex"
                >
                    Book A Table
                    <HiOutlineArrowRight className="h-4 w-4" />
                </a>

                {/* Mobile toggle */}
                <button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
                    onClick={() => setMobileOpen((s) => !s)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="space-y-1.5">
                        <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`md:hidden ${mobileOpen ? "block" : "hidden"} border-t border-white/10 bg-neutral-950/90 backdrop-blur`}
            >
                <div className="mx-auto max-w-7xl px-4 py-4">
                    <ul className="space-y-2">
                        {navLinks.map((item) => (
                            <li key={item.label} className="rounded-md">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-white/90 hover:bg-white/10">
                                        <span>{item.label}</span>
                                        {item.hasMenu && (
                                            <FiChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                                        )}
                                    </summary>
                                    {item.hasMenu && (
                                        <div className="mt-1 space-y-1 rounded-md bg-white/5 p-2">
                                            <a href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                                                Option 1
                                            </a>
                                            <a href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                                                Option 2
                                            </a>
                                            <a href="#" className="block rounded px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                                                Option 3
                                            </a>
                                        </div>
                                    )}
                                </details>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-300 px-6 py-2 text-sm font-medium text-black transition hover:opacity-90"
                    >
                        Book A Table
                        <HiOutlineArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </header>
    );
}
