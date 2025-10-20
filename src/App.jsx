import React from 'react'
import Navbar from './components/Navbar'
import CardMenu from './components/CardMenu'
import ComboSection from './components/ComboSection'

function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4'>
        <Navbar />
        <CardMenu />
      </div>
      <ComboSection />

    </>
  )
}

export default App
