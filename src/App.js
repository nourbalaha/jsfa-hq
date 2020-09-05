import React from 'react'
import './App.scss'

import Navbar from './components/Navbar/Navbar.component'
import Slideshow from './components/Slideshow/Slideshow.component'
import Page from './components/Page/Page.component'
import Footer from './components/Footer/Footer.component'

function App () {
  return (
    <div className='app'>
      <header className='app-header'>
        <Navbar />
        </header>
        <Slideshow />
        <Page title="About" id="about" />
        <Page title="Committee" id="committee" />
        <Page title="Education Center" id="education" />
        <Page title="Activities" id="activities" />
        <Page title="Information" id="information" />
        <Footer />
    </div>
  )
}

export default App
