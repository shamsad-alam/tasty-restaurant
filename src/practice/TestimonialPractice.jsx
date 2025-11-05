import React, { useState } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    job: "Frontend Developer",
    text: "React aur Tailwind se UI banana bohot asaan ho gaya hai!",
  },
  {
    name: "Priya Verma",
    job: "UI/UX Designer",
    text: "Tailwind CSS ne styling ka pura game change kar diya hai!",
  },
  {
    name: "Rohit Kumar",
    job: "Software Engineer",
    text: "React components ke saath Tailwind ek perfect combo hai.",
  },
];

const TestimonialPractice = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, job, text } = testimonials[index];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <p className="text-gray-700 italic mb-4">"{text}"</p>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{job}</p>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            ⬅️
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPractice;
