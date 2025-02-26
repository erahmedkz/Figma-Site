import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Footer/header';
import Home from './Site pages/GeneralHome';
import AboutUs from './Site pages/About Us';
import Contact from './Site pages/Contact';
import Footer from './Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;