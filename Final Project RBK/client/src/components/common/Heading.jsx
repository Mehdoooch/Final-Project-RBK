import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* <p>hello</p> */}
      </div>
    </>
  )
}

export default Heading
