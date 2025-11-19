import React, { useState } from "react";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-black bg-opacity-70 text-white py-12 min-h-[70vh] flex flex-col items-center justify-center">
      <h2 className="text-lg text-yellow-200 uppercase mb-2 tracking-wide">Our Testimonials</h2>
      <h1 className="text-3xl md:text-5xl font-bold mb-1 text-center">REAL STORIES OF MEMORABLE <br /> <span className="text-yellow-100 font-semibold">MEALS AND EXPERIENCES</span></h1>
      <div className="max-w-7xl mx-auto mt-8 px-4 text-center">
        <div>
          <button></button>
        </div>

        <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <p className="text-lg md:text-2xl mb-7 font-light">{testimonials[current].quote}</p>

        <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="flex flex-col items-center mt-5">
          <img src={testimonials[current].image} alt={testimonials[current].name} className="w-12 h-12 rounded-full border-2 border-yellow-200 object-cover" />
          <span className="mt-3 font-medium text-yellow-100">{testimonials[current].name}, <span className="font-light text-yellow-200">{testimonials[current].role}</span></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;



const testimonials = [
  {
    quote: "Amazing food, great people. Know the owner he is a hardworking family man. They prepare delicious and clean food. What I like most is that they wear gloves and hygiene is of pivotal importance. For now their food portions are good.",
    name: "Wade L Warren",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Ya local bhi use kar sakte ho
  },
  {
    quote: "From the moment we walked in, the ambiance was welcoming...",
    name: "Wade L Warren",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Ya local bhi use kar sakte ho
  },
  {
    quote: "Amazing food, great people. Know the owner he is a hardworking family man. They prepare delicious and clean food. What I like most is that they wear gloves and hygiene is of pivotal importance. For now their food portions are good.",
    name: "Wade L Warren",
    role: "Associate",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Ya local bhi use kar sakte ho
  },
  {
    quote: "From the moment we walked in, the ambiance was welcoming...",
    name: "Wade L Warren",
    role: "frontend",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Ya local bhi use kar sakte ho
  },
];

