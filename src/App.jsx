import React from 'react'
import Navbar from './components/Navbar'
import CardMenu from './components/CardMenu'
import ComboSection from './components/ComboSection'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4'>
        <Navbar />
        <CardMenu />
      </div>
      <ComboSection />
      <Blog />

    </>
  )
}

export default App
