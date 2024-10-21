import React from "react"
import img from "../images/pricing.jpg"
import Header from "../header/Header"
import "./contact.css"
import Footer from "../footer/Footer"
const Contact = () => {
  return (
    <>
     < Header/>
  
      <section className='contact mb'>
        <div className='back'>
        <div className='container'>
          <span>Contact Us</span>
          <h1>Get Helps & Friendly Support</h1>
        </div>
        <img src={img} alt='' />
      </div>
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
