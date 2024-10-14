import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from './components/DetailsPage'

function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;