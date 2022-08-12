import * as React from 'react';
import { Component } from 'react';

 
class Counter extends Component {
    

    styles = {
        fontWeight: "bold"
    };

    render() { 

        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatValue()} </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
                

            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-light" : "badge-primary";
        return classes;
    }

    formatValue(){
        return this.props.counter.value === 0 ? <h1>Zero</h1> : this.props.counter.value;
    }
}
 
export default Counter;