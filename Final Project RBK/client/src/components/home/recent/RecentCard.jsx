// import React from "react"
import React, { useEffect, useState } from "react";
import axios from "axios"
// import { title } from "process"
const RecentCard = () => {
  const [data, setData]=useState([])

  useEffect(()=>{
      axios.get("http://localhost:8080/house/getAll")
        .then((res)=>{
            console.log('this data',res.data);
            setData(res.data)
            
        })
        .catch((err)=>{
          console.log('this error',err);
          console.log('this');
          
        })
    },[])
  return (
    <>
      <div className='content grid3 mtop'>
        {/* {list.map((val, index) => ( */}
          {data.map((elem, i) => (
          // const { cover, category, location, name, price, type } = val
          // return (
            <div className='box shadow' key={i}>
              <div className='img'>
                <img src={elem.images[0].url} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: elem.room === "s+3" ? "#25b5791a" : "#ff98001a", color: elem.room === "s+3" ? "#25b579" : "#ff9800" }}>{elem.room}</span>
                  <i className='fa fa-heart'></i>
                </div>
                {/* <h4>{name}</h4> */}
                <h4>{elem.title}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {elem.localisation}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{elem.price}</button> <label htmlFor=''>/sqft</label>
                </div>
                {/* <span>{type}</span> */}
                <span>{elem.region}</span>

              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default RecentCard
