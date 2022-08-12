import * as React from 'react';
import { Component } from 'react';

 
class NavBar extends Component {
  

    render() { 

        return (
            <nav className="navbar navbar-light bg-ligh">
                <a className="navbar-brand" href="#">Total count: {this.computeTotalCount()}</a>
            </nav>
        );
    }

    computeTotalCount() {
        let acc = 0;
        console.log(this.props.counters);
        this.props.counters.forEach(element => {
            acc += element.value;
        });
        return acc;
    }
}
 
export default NavBar;


