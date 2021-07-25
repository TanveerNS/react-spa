import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { FaHome } from 'react-icons/fa';

import Blog  from "./Blog";
import About  from "./About";
import Contact from "./Contact";
 
class Home  extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        
          <ul className="header">
            <li><NavLink to="/blog"><span><FaHome /></span> Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/blog" component={Blog}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
          
        </div>
      </HashRouter>
    );
  }
}
 
export default Home;