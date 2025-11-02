import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



function CarouselHome() {
  const [index, setIndex] = useState(1)

  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1)
    }

  }
  const handleRight = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1)
    }

  }

  const [currentIndex, setCurrentIndex] = useState(1)

  const currentResponsice = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2)
    }
  }

  const handleNext = () => {
    if (currentIndex < slides.length - currentResponsice) {
      setCurrentIndex(currentIndex + 2)
    }
  }


  return (
    <>
      <section className='w-full   overflow-hidden mt-20'>
        <div className='max-w-[1400px] px-4 mx-auto relative '>
          <p onClick={handleLeft} className='absolute left-0  top-1/2 z-99 text-2xl w-[50px] h-[50px] cursor-pointer bg-amber-100 flex items-center justify-center rounded-full '><FaAngleLeft /></p>
          <div className='flex transition-all duration-300' style={{ transform: `translateX(-${index * 100}%)` }}>
            {
              slides.map((item) => (
                <div key={item.id} className='flex-none w-full p-4'>
                  <img className='w-full' src={item.image} alt={item.titleB} />
                  <div className='absolute bottom-1/2 w-full' style={{}}>
                    <p className='text-[20px] text-white font-semibold'>{item.eyebrow} </p>
                    <h3 className='text-5xl font-bold text-white mt-3 mb-1'>{item.titleA} </h3>
                    <h3 className='text-5xl font-bold text-white  mb-8'>{item.titleB} </h3>

                    <button className='bg-yellow-500 py-3 px-10 rounded-full font-bold text-white'>{item.cta} </button>
                  </div>
                </div>
              ))
            }
          </div>
          <p onClick={handleRight} className='absolute right-0 top-1/2 z-99 text-2xl w-[50px] h-[50px] cursor-pointer bg-amber-100 flex items-center justify-center rounded-full '><FaAngleRight /></p>
        </div>

        {/* small 3 cards carousels */}
        {/* <div className='max-w-5xl mx-auto my-10 relative overflow-hidden'>
          <p onClick={handlePrev} className='text-2xl absolute left-0 top-1/2 cursor-pointer z-99 bg-amber-100 p-2 rounded-full' >
            <FaAngleLeft />
          </p>

          <div className='flex transition-all duration-400'
            style={{ transform: `translate(-${(currentIndex * 100) / currentResponsice}%)` }}>
            {
              slides.map((img) => (
                <div key={img.id} className='flex-none w-full md:w-1/2 xl:w-1/3 p-2'>
                  <img className='h-90 object-cover rounded-4xl' src={img.image} alt="" />
                </div>
              ))
            }
          </div>

          <p onClick={handleNext} className='text-2xl absolute right-0 top-1/2 cursor-pointer z-99 bg-amber-100 p-2 rounded-full' >
            <FaAngleRight />
          </p>
        </div> */}
      </section>
    </>
  )
}

export default CarouselHome


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
  {
    id: 4,
    eyebrow: "CRAZY BEEFY BURGERS",
    titleA: "Quality Ingredients.",
    titleB: "Quality Burgers.",
    cta: "VIEW DETAIL",
    gradient: "from-fuchsia-700 via-rose-600 to-orange-500",
    image:
      "https://themesflat.co/html/restaurant/fastfood/assets/images/common/slider_2.jpg",
  },
  {
    id: 5,
    eyebrow: "SPICY WINGS FEST",
    titleA: "Crunchy. Juicy.",
    titleB: "Hot & Fresh.",
    cta: "ORDER NOW",
    gradient: "from-red-700 via-orange-600 to-amber-500",
    image:
      "https://themesflat.co/html/restaurant/fastfood/assets/images/common/slider_1.jpg",
  },
  {
    id: 6,
    eyebrow: "CHEESY DELIGHT",
    titleA: "Melty Layers.",
    titleB: "Massive Flavor.",
    cta: "DISCOVER",
    gradient: "from-purple-700 via-pink-600 to-red-500",
    image:
      "https://themesflat.co/html/restaurant/fastfood/assets/images/common/slider_3.jpg",
  },
];
