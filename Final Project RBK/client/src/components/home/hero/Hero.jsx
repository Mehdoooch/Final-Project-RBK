import React, { useState } from 'react';
import Heading from "../../common/Heading"
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./hero.css"
import axios from "axios";
const Hero = () => {
  const [data, setData] = useState([]);
  const [searchHouse, setSearchHouse] = useState('')
  

  const filtered = data.filter((elem) => {

    const titleHouse = elem.title.toLowerCase();
    const searchText = searchHouse.toLowerCase();
    // Check if the (title and description) match the search query
    return (
        titleHouse.includes(searchText) ||
        elem.description?.toLowerCase().includes(searchText) ||
        elem.region?.toLowerCase().includes(searchText)
    );
})
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
