
import './App.css';
import React from "react";
import NavBar from './components/Navbar';
import Card from './components/Card';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
//import Page from './components/Compo/Page';
import SignUp from './components/signup';
import Check from './components/Compo/check';
import About from './components/Compo/About';
import Portfolio from './components/Compo/Portfolio';




export default function App (){
  
 
  return (
   
      <div>
        
  <Router >
  <NavBar/>   
           <Routes>
                 <Route exact path='/about'  element={<About/>}></Route>
                 <Route exact path='/port'  element={<Portfolio/>}></Route>
                 <Route exact path='/Check' element={<Check/>}></Route> 
                 <Route exact path='/SignUp' element={<SignUp/>}></Route>
                 <Route exact path='/' element={<Card/>}></Route>
      
          </Routes>
     
       </Router>
      

 
      </div>
   
  );
}
 