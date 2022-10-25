import React from 'react'

import './App.css'
import { Navbar } from './components'
import About from './container/About/About'
import Header from './container/Header/Header'
import Services from './container/Services/Services'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
    </>
  )
}

export default App
