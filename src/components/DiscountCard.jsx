// PromoAndStats.jsx
import { useEffect, useState } from "react";

const promos = [
  {
    title: "Gift Vouchers\nFor Friends",
    desc:
      "Give gift vouchers to your friends and relatives to enjoy our fast food, Nunc id ullamcorper.",
    cta: "BUY GIFT NOW",
    gradient: "from-blue-700 to-blue-500",
    icon: "🎁",
  },
  {
    title: "First Order\nFrist Discount",
    desc:
      "20% discount on first order, Nam ut augue pulvinar turpis malesuada condimentum.",
    cta: "ORDER NOW",
    gradient: "from-orange-600 to-amber-500",
    icon: "％",
  },
  {
    title: "New Season\nNew Food",
    desc:
      "Discover new items at the store this summer, Aliquam faucibus lacus et dolor iaculis.",
    cta: "DISCOVERY NEW FOOD",
    gradient: "from-red-700 to-red-500",
    icon: "🍔",
  },
];

const statsData = [
  { label: "ORDERS EVERY DAY", value: 219 },
  { label: "HAPPY CUSTOMER", value: 7584 },
  { label: "THE EVENT IS HELD", value: 341 },
  { label: "CULINARY AWARD", value: 25 },
];

export default function DiscountCard() {
  return (
    <section className="py-12 md:py-16">
      {/* Top 3 promo cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {promos.map((p) => (
          <PromoCard key={p.title} {...p} />
        ))}
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-10 max-w-7xl px-4">
        <StatsBand />
      </div>
    </section>
  );
}

function PromoCard({ title, desc, cta, gradient, icon }) {
  return (
    <article
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-7 text-white md:p-9`}
    >
      <div className="absolute right-6 top-6 text-6xl/none opacity-90">{icon}</div>
      <h3 className="whitespace-pre-line text-3xl font-extrabold leading-tight">
        {title}
      </h3>
      <p className="mt-4 max-w-md text-white/90">{desc}</p>
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/25"
      >
        {cta} <span className="translate-y-px">→</span>
      </a>
    </article>
  );
}

function StatsBand() {
  return (
    <div
      className="
        rounded-2xl bg-[linear-gradient(135deg,#171717,_#0f0f0f_60%,#1a1a1a)]
        px-4 py-10 text-white md:px-10 md:py-12
      "
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {statsData.map((s, idx) => (
          <Stat key={s.label} {...s} showDivider={idx < statsData.length - 1} />
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, showDivider }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200; // ms
    const frames = Math.round(duration / 16);
    let i = 0;
    const inc = value / frames;
    const id = setInterval(() => {
      i++;
      setCount((c) => {
        const v = Math.round(Math.min(value, c + inc));
        return v;
      });
      if (i >= frames) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [value]);

  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="text-5xl font-extrabold text-amber-400">{count}</div>
      <p className="mt-3 text-sm tracking-wide text-white/80">{label}</p>

      {showDivider && (
        <span className="absolute right-0 top-1/2 hidden h-10 -translate-y-1/2 border-r border-white/15 md:block" />
      )}
    </div>
  );
}
