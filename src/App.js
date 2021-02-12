import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
//import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
//import Testimonials from './components/Testimonials';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import resumeData from './resumeData';
//import ContactForm from './components/ContactForm';
import ContactMe from './ContactMe';

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        
        <Portfolio resumeData={resumeData}/>
        
        <ContactMe />
        <Footer resumeData={resumeData}/>
        
      </div>
      
);
}
}
export default App;
