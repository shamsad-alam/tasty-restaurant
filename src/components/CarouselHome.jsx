// HeroCarousel.jsx
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    eyebrow: "CRAZY BEEFY BURGERS",
    titleA: "Quality Ingredients.",
    titleB: "Quality Burgers.",
    cta: "VIEW DETAIL",
    gradient: "from-fuchsia-700 via-rose-600 to-orange-500",
    image:
      "https://themesflat.co/html/restaurant/fastfood/assets/images/common/slider_2.jpg",
  },
  {
    id: 2,
    eyebrow: "SPICY WINGS FEST",
    titleA: "Crunchy. Juicy.",
    titleB: "Hot & Fresh.",
    cta: "ORDER NOW",
    gradient: "from-red-700 via-orange-600 to-amber-500",
    image:
      "https://themesflat.co/html/restaurant/fastfood/assets/images/common/slider_1.jpg",
  },
  {
    id: 3,
    eyebrow: "CHEESY DELIGHT",
    titleA: "Melty Layers.",
    titleB: "Massive Flavor.",
    cta: "DISCOVER",
    gradient: "from-purple-700 via-pink-600 to-red-500",
    image:
      "https://themesflat.co/html/restaurant/fastfood/assets/images/common/slider_3.jpg",
  },
];

export default function CarouselHome() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-6">
      <div className="relative overflow-hidden rounded-[28px]">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((s) => (
            <Slide key={s.id} data={s} />
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="Prev slide"
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-amber-500 text-white shadow-lg transition hover:bg-amber-600"
        >
          <FiChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-amber-500 text-white shadow-lg transition hover:bg-amber-600"
        >
          <FiChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition ${idx === i ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Slide({ data }) {
  return (
    <div className="min-w-full">
      <div
        className={`relative grid grid-cols-1 items-center gap-6 rounded-[28px] bg-linear-to-br ${data.gradient} px-8 py-12 md:grid-cols-2 md:px-12 md:py-16`}
      >
        {/* Left content */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-white/80">
            {data.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {data.titleA}
          </h2>
          <h2 className="mt-2 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {data.titleB}
          </h2>

          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300">
            {data.cta}
          </button>
        </div>

        {/* Right image with highlight rays mimic */}
        <div className="relative">
          <div className="pointer-events-none absolute -left-8 -top-10 h-72 w-72 rounded-full bg-white/10 blur-2xl md:h-96 md:w-96" />
          <img
            src={data.image}
            alt=""
            className="relative z-10 mx-auto max-h-[360px] w-full rounded-3xl object-contain md:max-h-[420px]"
          />
        </div>
      </div>
    </div>
  );
}
