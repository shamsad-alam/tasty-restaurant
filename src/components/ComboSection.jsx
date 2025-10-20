
export default function ComboSection() {
    return (
        <section className=" bg-[#fff6ee] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="">
                    <p className="text-xs font-semibold tracking-[0.2em] text-neutral-600">
                        EAT FREELY WITHOUT WORRYING ABOUT THE PRICE
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
                        Special Combo Offer
                    </h2>
                    <div className="mt-4 h-1 w-24 rounded-full bg-amber-400" />
                </div>

                {/* Cards */}
                <div className="mx-auto mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* LEFT CARD */}
                    <article
                        className=" group min-h-100 relative overflow-hidden rounded-3xl bg-white
                         p-6 md:p-10 transition-all duration-300 ease-out hover:bg-red-500 "
                    >
                        <span className="absolute right-6 top-6 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white">
                            $20.25
                        </span>

                        <div className="relative z-10 max-w-xl ">
                            <h3 className="text-xl group-hover:text-white font-extrabold text-black md:text-2xl">
                                Beef Burger Big Combo
                            </h3>

                            <div className="mt-4 h-1 w-16 rounded bg-amber-300" />

                            <p className="mt-4 group-hover:text-white text-black/90">
                                Duis sit amet libero volutpat, tempus augue quis, suscipit sapien.
                                Phasellus a cursus enim.
                            </p>

                            <ul className="mt-5 space-y-2 text-black group-hover:text-white">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                                    <span>A Large Size Beef Burger</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                                    <span>A Portion Of French Fries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                                    <span>A Cup Of Cold Pepsi</span>
                                </li>
                            </ul>

                            <button
                                className="
                mt-6 inline-flex items-center justify-center rounded-full
                bg-amber-500 px-6 py-3 text-sm font-semibold text-white group-hover:text-white group-hover:bg-black"
                            >
                                ADD TO CART COMBO
                            </button>
                        </div>

                        <img
                            src="https://themesflat.co/html/restaurant/fastfood/assets/images/common/product-1.png"
                            alt="Burger combo"
                            className=" md:absolute -bottom-5 right-4 z-0 w-full md:w-[55%] max-w-[520px] translate-y-9 object-contain transition-all
                             duration-300 ease-out group-hover:translate-y-3"
                        />
                    </article>

                    {/* RIGHT CARD */}
                    <article
                        className=" group relative overflow-hidden rounded-3xl bg-white
                         p-6 md:p-10 transition-all duration-300 ease-out hover:bg-red-500 "
                    >
                        <span className="absolute right-6 top-6 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white">
                            $20.25
                        </span>

                        <div className="relative z-10 max-w-xl ">
                            <h3 className="text-xl group-hover:text-white font-extrabold text-black md:text-2xl">
                                Beef Burger Big Combo
                            </h3>

                            <div className="mt-4 h-1 w-16 rounded bg-amber-300" />

                            <p className="mt-4 group-hover:text-white text-black/90">
                                Duis sit amet libero volutpat, tempus augue quis, suscipit sapien.
                                Phasellus a cursus enim.
                            </p>

                            <ul className="mt-5 space-y-2 text-black group-hover:text-white">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                                    <span>A Large Size Beef Burger</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                                    <span>A Portion Of French Fries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                                    <span>A Cup Of Cold Pepsi</span>
                                </li>
                            </ul>

                            <button
                                className="
                mt-6 inline-flex items-center justify-center rounded-full
                bg-amber-500 px-6 py-3 text-sm font-semibold text-white group-hover:text-white group-hover:bg-black"
                            >
                                ADD TO CART COMBO
                            </button>
                        </div>

                        <img
                            src="https://themesflat.co/html/restaurant/fastfood/assets/images/common/product-2.png"
                            alt="Burger combo"
                            className=" md:absolute bottom-0 right-4 z-0 w-full md:w-[55%] max-w-[520px] translate-y-6 object-contain transition-all
                             duration-300 ease-out group-hover:translate-y-1"
                        />
                    </article>
                </div>
            </div>
        </section>
    );
}
