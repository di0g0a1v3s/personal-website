import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

class NavBarButton extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
           <Link to={this.props.menu.href} className="nav-link text-white">

              <div className="p-2 nav-bar-button">
                {this.props.menu.icon} {this.props.menu.name}
              </div>
            </Link>
            
            );
    }
}
 
export default NavBarButton ;