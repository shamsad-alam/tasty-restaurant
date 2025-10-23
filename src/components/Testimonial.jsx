// TestimonialSection.jsx
import { useState } from "react";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Derrick Widmark",
    text:
      "Amazing food, great people. Know the owner he is a hardworking family man. They prepare delicious and clean food. What I like most is that they wear gloves and hygiene is of pivotal importance. For now their food portions are good.",
    avatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=128&q=80",
      "https://images.unsplash.com/photo-1544006656-8d08f1a2b4e9?w=128&q=80",
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=128&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
    ],
  },
  {
    id: 2,
    name: "Sofia Bennett",
    text:
      "Service is fast and the flavors are consistent every time. The staff is friendly and the place is spotless. Portions are generous without compromising on quality.",
    avatars: [
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=128&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=128&q=80",
      "https://images.unsplash.com/photo-1544006656-8d08f1a2b4e9?w=128&q=80",
    ],
  },
  {
    id: 3,
    name: "Arjun Malhotra",
    text:
      "Loved the crispy fries and juicy burgers. Online ordering was smooth and pickup was ready exactly on time. Definitely coming back with friends.",
    avatars: [
      "https://images.unsplash.com/photo-1544006656-8d08f1a2b4e9?w=128&q=80",
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=128&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=128&q=80",
    ],
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const goTo = (i) => setIndex(i);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Big quote icon */}
        <div className="flex justify-center">
          <FaQuoteRight className="h-12 w-12 text-red-500" aria-hidden="true" />
        </div>

        {/* Text */}
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-neutral-800 md:text-xl">
          {t.text}
        </p>

        {/* Name */}
        <p className="mt-6 text-center text-lg font-extrabold text-neutral-900">
          – {t.name} –
        </p>

        {/* Avatars row */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {t.avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`h-14 w-14 rounded-full border-4 object-cover transition
                ${i === 0 ? "border-amber-400" : "border-transparent"}`}
            />
          ))}
          {/* More indicator circle */}
          <div className="grid h-14 w-14 place-items-center rounded-full bg-neutral-900 text-white">
            <span className="text-xl">···</span>
          </div>
        </div>

        {/* Arrows */}
        <div className="relative mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-amber-500 text-white transition hover:bg-amber-600"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-amber-500 text-white transition hover:bg-amber-600"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="mt-16 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === i ? "bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
