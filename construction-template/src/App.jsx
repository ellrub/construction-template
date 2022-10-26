import React from 'react'

import './App.css'
import { Navbar } from './components'
import About from './container/About/About'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Services from './container/Services/Services'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default App
