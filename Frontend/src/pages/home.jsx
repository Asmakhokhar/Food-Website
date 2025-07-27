import React from 'react'
import HeroSection from '../components/heroSection'
import About from '../components/About'
import Oualities from '../components/Qualities'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

function home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Oualities />
      <Menu />
      <Services />
      <Team />
      <Reservation />
      <Footer />
    </>
  )
}

export default home
