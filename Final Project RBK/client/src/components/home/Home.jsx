import React, { useState } from 'react';
import Header from "./header/Header"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Footer from "./footer/Footer"


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };
  return (
    <>
        <Header/>
        <Hero onSearch={handleSearch}/>
        <Featured />
        <Recent searchQuery={searchQuery}/>
        <Footer />
    </>
  )
}

export default Home
