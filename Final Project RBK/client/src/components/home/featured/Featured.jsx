import React from "react"
import "./Featured.css"
import { featured } from "../data/Data"

const Featuredd = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <div className='heading'>
          <h1>Featured Property Types</h1>
          <p>Find All Type of Property.</p>
          </div>
          <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
        </div>
      </section>
    </>
  )
}

export default Featuredd
