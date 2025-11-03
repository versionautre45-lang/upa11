import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Programme from '../components/Programme'
import About from '../components/About'
import NewsCards from '../components/NewsCards'
import RecapHome from '../components/RecapHome'
import Navbar from '../components/Navbar'
import Partenariat from '../components/Partenariat'


const Contenue = () => {
  return (
    <div className="scroll-smooth">

      <Navbar type="home"/>

      <section id="accueil" className="scroll-mt-24"><Hero /></section>
      
      <Welcome />

      <section id="a-propos" className="scroll-mt-14"><About /></section>

      <section id="programmes" className="scroll-mt-14"><Programme /></section>

      <NewsCards />

      <RecapHome />

      <section id="partenariat" className="scroll-mt-16"><Partenariat /></section>


    </div>
  )
};

export default Contenue;
