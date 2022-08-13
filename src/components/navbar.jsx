import * as React from 'react';
import { Component } from 'react';
import NavBarButton from './navbar-button'
import { Link } from "react-router-dom";
 
class NavBar extends Component {
  
    render() { 

        return (
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-0">
  <div className="container-fluid">
    <div className="navbar-brand px-2 ">
      
      <Link to="/" className="nav-link text-white d-flex flex-wrap align-items-center">
        <svg className="mx-2" height="30px" width="30px">
          <use href="#site-logo"/>
        </svg>
        
          <p className="fs-6 my-2">{this.props.title}</p>
      </Link>
      
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="flex-wrap flex-column align-content-end navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-lg-0">
        {this.props.menus.map(menu => <li key={menu.id} className="nav-item active text-center"><NavBarButton key={menu.id} menu={menu}/></li>)}
      </ul>
    </div>
  </div>
</nav>

         





        );
    }
}
 
export default NavBar;


