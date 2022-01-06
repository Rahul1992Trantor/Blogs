import React from 'react';
import { BrowserRouter as Router,Routes, Route, Na, NavLink } from 'react-router-dom';


import './Nav.scss';




function NavBar() {
  
  return (
  <div >
      <div  className='mainNav'>
      <div className='twelve'>
         <h1>BlogWap ⇅</h1>
      </div>
      </div>

    <div  className='bar'>
    

                <NavLink to="/"  className="nav-item"><i className="fa fa-fw fa-home"/></NavLink>
           

              
                <NavLink to="/about"  className='nav-item'><i className="fas fa-address-card"/></NavLink>
                

              
                <NavLink to="/port"  className='nav-item'><i className="fab fa-algolia"/></NavLink>  
             
              
              
                <NavLink to={"/SignUp"} className='nav-item'><i className="fas fa-sign-in-alt"></i></NavLink>
               

              
                <NavLink to="/Check" className='nav-item'><i className="fa fa-fw fa-user"></i></NavLink>
       
        </div>
      
    
      </div>
    
  
      
 
  );
}

export default NavBar;


