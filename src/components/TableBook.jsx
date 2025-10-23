// ReservationSection.jsx
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const times = ["17:00 PM", "17:30 PM", "18:00 PM", "18:30 PM", "19:00 PM"];
const guests = ["02 Guest", "04 Guest", "06 Guest", "08 Guest", "10 Guest"];

export default function TableBook() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: times[2],
    date: "",
    guests: guests[2],
  });

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // submit or integrate with backend here
    console.log("Reservation:", form);
  };

  return (
    <section className="bg-gradient-to-b from-red-600 to-red-700 py-16 md:py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Book Table Now Today!
        </h2>
        <p className="mt-4 text-white/90">
          The Basilico menu is diverse and extensive, with many choices for you, your family and friends.
        </p>
        <p className="mt-2 text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="mx-auto mt-5 h-1 w-24 rounded bg-amber-400" />

        <form
          onSubmit={onSubmit}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* Row 1 */}
          <Input
            placeholder="Name*"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <Input
            placeholder="Email*"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <Input
            placeholder="Phone number*"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
          />

          {/* Row 2 */}
          <Select
            name="time"
            value={form.time}
            onChange={onChange}
            options={times}
          />
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />
          <Select
            name="guests"
            value={form.guests}
            onChange={onChange}
            options={guests}
          />
        </form>

        <button
          onClick={onSubmit}
          className="mx-auto mt-8 inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
        >
          BOOK A TABLE
        </button>
      </div>
    </section>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`h-14 w-full rounded-full border-0 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-300 px-6 ${className}`}
    />
  );
}

function Select({ options, name, value, onChange }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-14 w-full appearance-none rounded-full border-0 bg-white pr-12 pl-6 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-700" />
    </div>
  );
}
