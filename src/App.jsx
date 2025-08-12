import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Header from "./components/Header";
import ResultPage from "./pages/Result";
import AllNotices from "./pages/AllNotice";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Assignment from "./pages/Assignment";
import EPayment from "./pages/EPayment";
import Gallery from "./pages/Gallery";
import AdminLogIn from "./pages/AdminLogIn";
import ApplyNow from "./pages/AplyNow";




function App() {
  return (
   
    <Router>
       <Header/>
     
      <div className="p-4">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/notice"  element={<AllNotices/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/epayment" element={<EPayment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/login" element={<AdminLogIn />} />
          <Route path="/apply" element={<ApplyNow />} />
        </Routes>
        
      </div>
    </Router>

    
    
  );
}

export default App;
