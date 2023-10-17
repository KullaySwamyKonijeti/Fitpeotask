import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/SidebarMain";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/DashboardComponents/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app1">
        <Sidebar />
      </div>
      <div className="app2">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/about" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
