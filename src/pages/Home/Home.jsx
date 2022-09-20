import React from 'react'
import Featured from '../../components/Featured/Featured';
import FeaturedProperty from '../../components/FeaturedProperty/FeaturedProperty';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="home-container">
        <Featured/>
        <h1 className="home-title">Browser by property type</h1>
        <PropertyList/>
        <h1 className="home-title">Home guest love</h1>
        <FeaturedProperty/>
      </div>
    </div>
  )
}

export default Home