import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Hilights from './components/Hilights'
import Model from './components/Model'
import * as Sentry from '@sentry/react';
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <main className='bg-black'>
      <NavBar/>
      <Hero/>
      <Hilights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
