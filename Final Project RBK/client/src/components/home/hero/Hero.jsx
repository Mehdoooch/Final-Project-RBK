// // import React, { useState } from 'react';
// // import '@fortawesome/fontawesome-free/css/all.min.css';
// // import "./hero.css";
// // import Category from "../header/Category"
// // const Hero = ({ onSearch , cat, setCat, filterByCateg, setFilterByCateg, data }) => {
// //   const [searchTerm, setSearchTerm] = useState("")
 
// //   const handleSearchChange = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     onSearch(value); 
// //   };

// //   return (
// //     <>
// //       <section className='hero'>
// //         <div className='container'>
// //           <div className='heading'>
// //             <h1>Search Your Next Home</h1>
// //             <p>Find new & featured property located in your local city.</p>
// //           </div>
// //           <form className='flex'>
// //             <div className='box'>
// //               <span>City/Street</span>
// //               <input 
// //                 type='text' 
// //                 placeholder='Location' 
// //                 value={searchTerm} 
// //                 onChange={handleSearchChange}  // Déclenche la fonction à chaque frappe de touche
// //               />
               
// //             </div>
// //             <Category cat={cat} setCat={setCat} filterByCateg={filterByCateg} setFilterByCateg={setFilterByCateg} data={data} />
// //             <i className='fa fa-search'></i>
// //           </form>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Hero;

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./hero.css";
import Category from "../header/Category"; // Assuming Category is the dropdown for room selection

const Hero = ({ onSearch, cat, setCat, filterByCateg, setFilterByCateg, data }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  console.log('this data hero',data);
  
  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); 
    onSearch(value); // Call the parent onSearch to update the filtered data
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
                onChange={handleSearchChange} // Trigger the search function on input change
              />
            </div>

            {/* Pass props to Category (which might be your select dropdown for room categories) */}
            <Category 
            cat={cat} 
            setCat={setCat} 
            filterByCateg={filterByCateg} 
            setFilterByCateg={setFilterByCateg} 
            data={data} 
          />

            <button type="button" className='search-btn'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;

// import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "./hero.css";
// import Category from "../header/Category";

// const Hero = ({ onSearch,  cat, setCat}) => {
//   const [searchTerm, setSearchTerm] = useState(""); // Local state for search input

//   // Handle search input changes
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     onSearch(value); // Pass search term to parent component
//   };

//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='heading'>
//             <h1>Search Your Next Home</h1>
//             <p>Find new & featured property located in your local city.</p>
//           </div>

//           <form className='flex'>
//             <div className='box'>
//               <span>City/Street</span>
//               <input
//                 type='text'
//                 placeholder='Location'
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//             </div>

//             {/* Render Category (the room select dropdown) */}
//             <Category
//               cat={cat}
//               setCat={setCat}
//               data={data}
//             />

//             <button type="button" className='search-btn'>
//               <i className='fa fa-search'></i>
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
