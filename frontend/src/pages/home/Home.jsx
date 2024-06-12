import React from 'react'
import './Home.css'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialMenu from './SpecialMenu'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories/>
      <SpecialMenu/> 
      <Services/>
    </div>
  )
}

export default Home