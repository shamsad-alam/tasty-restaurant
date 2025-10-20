// BlogCards.jsx
const posts = [
    {
        id: 1,
        title: "Review: Which Fish Burger is the Best Catch?",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
        date: "August 24, 2023",
        tags: ["Burger", "Fast food"],
        excerpt:
            "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies.",
    },
    {
        id: 2,
        title:
            "Viral YouTube Burger Changing the Industry",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop",
        date: "August 24, 2023",
        tags: ["Burger", "Fast food"],
        excerpt:
            "Globally streamline efficient models while iteratively cultivating value-driven experiences across teams and channels.",
    },
    {
        id: 3,
        title:
            "The Ultimate Hangover Burger Egg in a Hole Burger",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
        date: "August 24, 2023",
        tags: ["Burger", "Fast food"],
        excerpt:
            "Proactively orchestrate frictionless initiatives whereas seamless opportunities empower next-gen customer delight.",
    },
];

export default function Blog() {
    return (
        <section className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section header */}
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                        Read news from us
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
                        What’s New Today?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600">
                        Hand-crafted fresh to order. Smashed to lock in flavor on a toasted brioche bun.
                    </p>
                    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-amber-400" />
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((p) => (
                        <Card key={p.id} post={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ post }) {
    return (
        <article
            className="
        group relative overflow-hidden rounded-3xl bg-white shadow
        transition-shadow duration-300 hover:shadow-xl
      "
        >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Meta pill at bottom over image (always visible) */}
                <div
                    className="
            pointer-events-none absolute inset-x-4 bottom-4 z-10
            flex flex-wrap items-center gap-3 rounded-full bg-red-600 px-4 py-2 text-white shadow
          "
                >
                    <span className="text-sm">{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-white/70" />
                    <span className="text-sm">{post.tags.join(", ")}</span>
                </div>

                {/* Bottom slide-up description on hover */}
                <div
                    className="
            absolute inset-x-0 bottom-0 z-20 translate-y-full
            bg-gradient-to-t from-black/80 via-black/60 to-transparent p-5
            opacity-0 transition-all duration-300 ease-out
            group-hover:translate-y-0 group-hover:opacity-100
          "
                >
                    <p className="line-clamp-3 text-sm text-white/95">{post.excerpt}</p>
                </div>
            </div>

            {/* Title + CTA area */}
            <div className="px-6 py-6">
                <h3 className="text-xl font-extrabold leading-snug">
                    {post.title}
                </h3>

                <div className="mt-6">
                    <a
                        href="#"
                        className="
              inline-flex items-center justify-center rounded-full
              bg-amber-500 px-6 py-3 text-sm font-semibold text-white
              transition-colors hover:bg-amber-600
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60
            "
                    >
                        READ MORE
                    </a>
                </div>
            </div>
        </article>
    );
}
