import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/demo" exact element={<Home />} />
          <Route path="/demo" component={<Services />} />
          <Route path="/demo" component={<Products />} />
          <Route path="/demo" component={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
