import * as React from 'react';
import { Component } from 'react';
// @ts-ignore
import Counter from './counter.tsx';

 
class Counters extends Component {
    
    render() { 

        return (
            <div>
                <button className='btn btn-primary btn-sm m-2' onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(counter => <Counter key={counter.id} counter = {counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}/>)}
            </div>
            );
    }

   
}
 
export default Counters;