import React, { useState } from 'react';
import Header from "./header/Header"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Footer from "./footer/Footer"




const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cat, setCat] = useState('');
  const [data, setData] = useState([]); 
  const handleSearch = (query) => {
    setSearchQuery(query); 
  };
  return (
    <>
        <Header/>
        <Hero onSearch={handleSearch}
         cat={cat}
         setCat={setCat}
         data={data}
        />
        <Recent searchQuery={searchQuery}
         cat={cat}
         data={data} 
        />
        <Featured />
        <Footer />
    </>
  )
}

export default Home
