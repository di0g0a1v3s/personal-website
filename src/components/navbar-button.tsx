import * as React from 'react';
import { Component } from 'react';

class NavBarButton extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
        
            <a href="/" className="nav-link text-white">
              <div className="p-2 nav-bar-button">
                {this.props.menu.icon} {this.props.menu.name}
              </div>
            </a>
            
            );
    }
}
 
export default NavBarButton ;