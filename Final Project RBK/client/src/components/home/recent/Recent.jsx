// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./recent.css"
// import axios from "axios"

//   const Recent = ({ searchQuery, cat, setCat, filterByCateg, setFilterByCateg, data }) => {
//     const [data, setData] = useState([]); 
//     const [cat, setCat] = useState('');
//     const [filterByCateg, setFilterByCateg] = useState(data);
//     const navigate=useNavigate()
  
//     useEffect(() => {
//       axios.get("http://localhost:8080/house/getAll")
//         .then((res) => {
//           console.log('this data', res.data);
//           setData(res.data);
//         })
//         .catch((err) => {
//           console.log('this error', err);
//         });
//     }, []);
  
   
//     const filteredData = data.filter((el) => {
//       return el.title.toLowerCase().includes(searchQuery.toLowerCase()); 
//     });
  
//   return (
//     <>
//       <section className='recent padding'>
//         <div className='container'>
//           <div className='heading'>
//           <h1>Recent Property Listed</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
//           </div>
          
//           <div className='content grid3 mtop'>
//           {(searchQuery ? filteredData:cat && cat!== "All" ? filterByCateg : data).map((elem, i) => (
//               <div className='box shadow'  key={elem.id}>
               
//                 <div className='img'>
//                 <p   onClick={()=> {  navigate(`/detailsPage/${elem.id}` , {state : elem}) }}>
//                   <img src={elem.images[0].url} alt={elem.title} /></p>
//                 </div>
//                 <div className='text'>
//                   <div className='category flex'>
                    
//                     <span style={{ background: elem.room === "s+3" ? "#25b5791a" : "#ff98001a", color: elem.room === "s+3" ? "#25b579" : "#ff9800" }}>{elem.room}</span>
                    
//                     <i className='fa fa-heart'></i>
                    
//                   </div>

//                   <h4>{elem.title}</h4>
//                   <p>
//                     <i className='fa fa-location-dot'></i> {elem.localisation}
//                   </p>
//                 </div>
//                 <div className='button flex'>
//                   <div>
//                     <button className='btn2'>{elem.price}</button> <label htmlFor=''></label>
//                   </div>
//                   <span>{elem.region}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
// export default Recent
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./recent.css";
import axios from "axios";
import Category from '../header/Category';

const Recent = ({ searchQuery }) => {
  const [data, setData] = useState([]); 
  const [cat, setCat] = useState('');
  const [filterByCateg, setFilterByCateg] = useState(data);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/house/getAll")
      .then((res) => {
        setData(res.data);
        setFilterByCateg(res.data); 
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

  const filteredData = filterByCateg.filter((el) => {
    return el.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <div className='heading'>
            <h1>Recent Property Listed</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <Category 
            cat={cat} 
            setCat={setCat} 
            filterByCateg={filterByCateg} 
            setFilterByCateg={setFilterByCateg} 
            data={data} 
          />
          <div className='content grid3 mtop'>
            {(searchQuery ? filteredData : cat && cat !== "All" ? filterByCateg : data).map((elem, i) => (
              <div className='box shadow' key={elem.id}>
                <div className='img'>
                  <p onClick={() => navigate(`/detailsPage/${elem.id}`, { state: elem })}>
                    <img src={elem.images[0].url} alt={elem.title} />
                  </p>
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span style={{ background: elem.room === "s+3" ? "#25b5791a" : "#ff98001a", color: elem.room === "s+3" ? "#25b579" : "#ff9800" }}>
                      {elem.room}
                    </span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{elem.title}</h4>
                  <p><i className='fa fa-location-dot'></i> {elem.localisation}</p>
                </div>
                <div className='button flex'>
                  <button className='btn2'>{elem.price}</button>
                  <span>{elem.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./recent.css";
// import axios from "axios";

// const Recent = ({ searchQuery, cat, data }) => {
//   const [filteredData, setFilteredData] = useState(data);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the data from backend if not passed as props
//     if (!data.length) {
//       axios.get("http://localhost:8080/house/getAll")
//         .then((res) => {
//           setFilteredData(res.data);
//         })
//         .catch((err) => {
//           console.log('Error fetching data:', err);
//         });
//     } else {
//       setFilteredData(data);
//     }
//   }, [data]);

//   // Apply search and category filters
//   useEffect(() => {
//     let filtered = data;

//     // Apply search filter
//     if (searchQuery) {
//       filtered = filtered.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Apply category filter
//     if (cat && cat !== '') {
//       filtered = filtered.filter((item) => item.room === cat);
//     }

//     setFilteredData(filtered);
//   }, [searchQuery, cat, data]);

//   return (
//     <section className='recent padding'>
//       <div className='container'>
//         <div className='heading'>
//           <h1>Recent Property Listed</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//         </div>

//         <div className='content grid3 mtop'>
//           {filteredData.map((elem) => (
//             <div className='box shadow' key={elem.id}>
//               <div className='img'>
//                 <p onClick={() => navigate(`/detailsPage/${elem.id}`, { state: elem })}>
//                   <img src={elem.images[0].url} alt={elem.title} />
//                 </p>
//               </div>
//               <div className='text'>
//                 <div className='category flex'>
//                   <span style={{
//                     background: elem.room === "s+3" ? "#25b5791a" : "#ff98001a",
//                     color: elem.room === "s+3" ? "#25b579" : "#ff9800"
//                   }}>
//                     {elem.room}
//                   </span>
//                   <i className='fa fa-heart'></i>
//                 </div>
//                 <h4>{elem.title}</h4>
//                 <p><i className='fa fa-location-dot'></i> {elem.localisation}</p>
//               </div>
//               <div className='button flex'>
//                 <button className='btn2'>{elem.price}</button>
//                 <span>{elem.region}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Recent;

