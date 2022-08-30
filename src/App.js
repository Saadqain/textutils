// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";




function App() {
  return (
    <>
    <Router>
    <Navbar />
   <div className="container" >
    
   <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" />}>
            </Route>
          </Routes>
   </div>
   </Router>
    </>
  );
}

export default App;
