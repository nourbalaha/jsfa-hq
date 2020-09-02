import React from 'react'
import './App.scss'

import Navbar from './components/Navbar/Navbar.component'

function App () {
  return (
    <div className='app'>
      <header className='app-header'>
        <Navbar />
      </header>
    </div>
  )
}

export default App
