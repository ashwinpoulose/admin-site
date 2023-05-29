import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import DashBoard from "./Components/Dashboard";
import Alert from "./Components/Alert";
import Employee from "./Components/Employee";
import Details from "./Components/Details";
import Users from "./Components/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/alert" element={<Alert children={""} />} />
            <Route path="/emp" element={<Employee />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/user" element={<Users />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
