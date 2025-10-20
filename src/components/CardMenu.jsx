// MenuSection.jsx
import { FaArrowRight } from "react-icons/fa"; // left arrow
// You can replace image URLs with your assets
const items = [
    {
        title: "Burger.",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        gradient: "from-amber-500 to-orange-600",
        textColor: "text-white",
        image:
            "https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-02.png",
    },
    {
        title: "Fried Chicken.",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        gradient: "from-red-700 to-red-500",
        textColor: "text-white",
        image:
            "https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-01.png",
    },
    {
        title: "Appetizer.",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        gradient: "from-blue-700 to-blue-600",
        textColor: "text-white",
        image:
            "https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-05.png",
    },
    {
        title: "Fried Chicken.",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        gradient: "from-sky-700 to-purple-700",
        textColor: "text-white",
        image:
            "https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-03.png",
    },
    {
        title: "Appetizer.",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        gradient: "from-lime-500 to-green-900",
        textColor: "text-white",
        image:
            "https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-04.png",
    },
     {
        title: "Burger.",
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        gradient: "from-yellow-500 to-amber-600",
        textColor: "text-white",
        image:
            "https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-02.png",
    },
];

export default function CardMenu() {
    return (
        <section className="py-16 md:py-24">
            {/* Section header */}
            <div className="mx-auto max-w-3xl px-4 text-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                    DISCOVERY MENU
                </p>
                <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
                    What Eats Today?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600">
                    The Basilico menu is diverse and extensive, with many choices for you, your family and friends.
                </p>
                <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-amber-400" />
            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
                {items.map((item) => (
                    <Card key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}

function Card({ title, desc, gradient, textColor, image }) {
    return (
        <article className={`
                group relative overflow-hidden rounded-3xl bg-gradient-to-b ${gradient}
                
                transition-all duration-300 ease-out
                hover:shadow-2xl `}>
            {/* Content */}
            <div className="min-h-110">
                <div className="p-6 sm:p-8 md:p-10">
                    <h3 className={`text-3xl font-extrabold leading-tight sm:text-4xl ${textColor}`}>
                        {title}
                    </h3>
                    <p className="mt-4 max-w-md text-white/90">
                        {desc}
                    </p>

                    {/* Hover CTA with left arrow in circle */}
                    <button
                        className="
                       mt-6 inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2
                       text-white backdrop-blur transition-all duration-300
                       hover:bg-white/25" >
                        <span className="text-sm font-medium">Discover More</span>

                        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-neutral-900 transition-all duration-300 group-hover:bg-white">
                            <FaArrowRight className="h-4 w-4" />
                        </span>
                    </button>
                </div>
                {/* Food image anchored bottom for Basilico feel */}
                <img
                    src={image}
                    alt={title}
                    className=" z-1 absolute -bottom-20 left-1/2  -translate-x-1/2 mx-auto translate-y-9 
                    rounded-2xl object-contain object-bottom opacity-95 transition-all 
                    duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 "
                />
            </div>
        </article>
    );
}
