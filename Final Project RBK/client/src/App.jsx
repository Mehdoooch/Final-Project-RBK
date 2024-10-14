//import "./App.css";
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddHouse from "./components/Admin/AddHouse";
import Dashboard from "./components/Admin/Dashboard";
import Homeadmin from "./components/Admin/Homeadmin";
import Allhouses from "./components/Admin/Allhouses";
import Allreservations from "./components/Admin/Allreservations ";
import Allusers from "./components/Admin/Allusers ";
import Updatehouse from "./components/Admin/Updatehouse";


function App() {


  return (
    <>

      <BrowserRouter>
        <Dashboard />
        <Routes>

          <Route path="/admin/home" element={<Homeadmin />} />
          <Route path="/admin/newhouse" element={<AddHouse />} />
          <Route path="/admin/houses" element={<Allhouses />} />
          <Route path="/admin/reservations" element={<Allreservations />} />
          <Route path="/admin/users" element={<Allusers />} />
          <Route path="/admin/houses/update/:id" element={<Updatehouse />} />

        </Routes>
      </BrowserRouter>




    </>
  );
}


export default App;