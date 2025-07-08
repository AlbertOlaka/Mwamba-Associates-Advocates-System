import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Cases from './pages/Cases';
import AddCase from './pages/AddCase';
import CaseDetails from './pages/CaseDetails';
import EditCase from './pages/EditCase';
import Lawyers from './pages/Lawyers';
import AddLawyer from './pages/AddLawyer';
import LawyerDetails from './pages/LawyerDetails';
import EditLawyer from './pages/EditLawyer';
import Clients from './pages/Clients';
import AddClient from './pages/AddClient';
import ClientDetails from './pages/ClientDetails';
import EditClient from './pages/EditClient';
import Appointments from './pages/Appointments';
import AddAppointment from './pages/AddAppointment';
import AppointmentDetails from './pages/AppointmentDetails';
import EditAppointment from './pages/EditAppointment';
import NotFound from './pages/NotFound';
import Billing from './pages/Billing'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/add-case" element={<AddCase />} />
          <Route path="/cases-details/:id" element={<CaseDetails />} />
          <Route path="/edit-case/:id" element={<EditCase />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/add-lawyer" element={<AddLawyer />} />
          <Route path="/lawyer-details/:id" element={<LawyerDetails />} />
          <Route path="/edit-lawyer/:id" element={<EditLawyer />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/client-details/:id" element={<ClientDetails />} />
          <Route path="/edit-client/:id" element={<EditClient />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
          <Route path="/appointment-details/:id" element={<AppointmentDetails />} />
          <Route path="/edit-appointment/:id" element={<EditAppointment />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;