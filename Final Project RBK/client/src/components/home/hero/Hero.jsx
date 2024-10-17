import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./hero.css";

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='heading'>
            <h1>Search Your Next Home</h1>
            <p>Find new & featured property located in your local city.</p>
          </div>
          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input 
                type='text' 
                placeholder='Location' 
                value={searchTerm} 
                onChange={handleSearchChange}  // Déclenche la fonction à chaque frappe de touche
              />
            </div>
            <i className='fa fa-search'></i>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
