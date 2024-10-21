import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddHouse from "./components/Admin/AddHouse";
import Allhouses from "./components/Admin/Allhouses";
import Allreservations from "./components/Admin/Allreservations ";
import Allusers from "./components/Admin/Allusers ";
import Updatehouse from "./components/Admin/Updatehouse";
import DetailsPage from "./components/DetailsPage";
import Dashboard from "./components/Admin/Dashboard.jsx";
import Contact from "./components/Contact.jsx"
import Home from "./components/home/Home";
import Login from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/admin/home" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/home" element={<DetailsPage />} />
          <Route path="/admin/newhouse" element={<AddHouse />} />
          <Route path="/admin/houses" element={<Allhouses />} />
          <Route path="/admin/reservations" element={<Allreservations />} />
          <Route path="/admin/users" element={<Allusers />} />
          <Route path="/admin/houses/update/:id" element={<Updatehouse />} />
          <Route path='/detailsPage/:id' element={<DetailsPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
