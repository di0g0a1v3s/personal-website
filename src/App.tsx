// @ts-ignore
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import NavBar from './components/navbar.tsx';
// @ts-ignore
import Counters from './components/counters.tsx';
import React from 'react';

class App extends React.Component {

  constructor(props: any) {
    super(props);

    this.state = 
    {
      counters : [{id:1, value:7}, {id:2, value:0}, {id:3, value:2}]
    }
  }

  render() {
      return (
      <React.Fragment>
        <NavBar counters = {this.state.counters}/>
        <main className='container'>
          <Counters counters = {this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }

  handleDelete = (counterId) => {
    this.setState({counters : this.state.counters.filter(counter => counter.id !== counterId)});
  };

  handleIncrement = (counter) => {
    const ctrs = this.state.counters.map(c => c.id === counter.id ? {id:c.id, value:c.value+1} : c  );
    this.setState({counters : ctrs});
  };

  handleReset = () => {
    const ctrs = this.state.counters.map(c => {return {id:c.id, value:0}});
    this.setState({counters : ctrs});
  };
}

export default App;
