import React from 'react'
import './App.scss'

import Navbar from './components/Navbar/Navbar.component'
import Slideshow from './components/Slideshow/Slideshow.component'

function App () {
  return (
    <div className='app'>
      <header className='app-header'>
        <Navbar />
        </header>
        <Slideshow />
    </div>
  )
}

export default App
