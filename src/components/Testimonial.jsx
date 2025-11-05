import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from "react-icons/fa6";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { useState } from 'react';



function Testimonial() {

  const [index, setIndex] = useState(0)

  const handleLeft = () => {
    setIndex((item) => (item === 0 ? testimonials.length - 1: item - 1))
  }
  const handleRight = () => {
    setIndex((item)=> (item === testimonials.length -1 ? 0 : item + 1))
  }

  const {text, name} = testimonials[index]
  return (
    <>
      <section>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='flex justify-between items-center py-20'>
            <div>
              <p onClick={handleLeft} className='w-15 h-15 rounded-full text-2xl  p-5 bg-yellow-300 cursor-pointer'><FaArrowLeft /></p>
            </div>

            {/* all Testimonial here */}
            <div className=' px-10 mx-auto'>

              <div className=''>
                <h3 className='flex justify-center text-5xl font-bold text-amber-600'><BsChatRightQuoteFill /></h3>
                <h2 className='text-2xl py-3 mt-10 mb-5'>{text} </h2>
                <h3 className='text-xl font-semibold text-amber-500'>{name} </h3>
              </div>

            </div>

            <div>
              <p onClick={handleLeft} className='w-15 h-15 rounded-full text-2xl  p-5 bg-yellow-300 cursor-pointer'><FaArrowLeft /></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial


const testimonials = [
  {
    id: 1,
    name: "Derrick Widmark",
    text:
      "Amazing food, great people. Know the owner he is a hardworking family man. They prepare delicious and clean food. What I like most is that they wear gloves and hygiene is of pivotal importance. For now their food portions are good.",
    avatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=128&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
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
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=128&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
    ],
  },
  {
    id: 3,
    name: "Arjun Malhotra",
    text:
      "Loved the crispy fries and juicy burgers. Online ordering was smooth and pickup was ready exactly on time. Definitely coming back with friends.",
    avatars: [
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=128&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&q=80",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=128&q=80",
    ],
  },
];