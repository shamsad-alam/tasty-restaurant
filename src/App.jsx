import React from 'react'
import Navbar from './components/Navbar'
import CardMenu from './components/CardMenu'
import ComboSection from './components/ComboSection'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import TableBook from './components/TableBook'
import DiscountCard from './components/DiscountCard'
import CarouselHome from './components/CarouselHome'

function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4'>
        <Navbar />
        <CardMenu />
      </div>
      <CarouselHome />
      <ComboSection />
      <DiscountCard />
      <Blog />
      <TableBook />
      <Testimonial />
      <Footer />

    </>
  )
}

export default App
