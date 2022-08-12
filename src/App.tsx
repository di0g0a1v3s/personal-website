import './App.css';
import NavBar from './components/navbar.tsx';
import React from 'react';

class App extends React.Component {

  constructor(props: any) {
    super(props);

    this.state = 
    {
      title : 'Diogo Alves',
      menus : [
        {id:1, name:'About', href:"", icon: <i className="bi bi-person-lines-fill"></i> }, 
        {id:2, name:'Experience', href:"", icon: <i className="bi bi-briefcase"></i>}, 
        {id:3, name:'Projects', href:"", icon: <i className="bi bi-code-slash"></i> }, 
        {id:4, name:'Contacts', href:"", icon: <i className="bi bi-envelope"></i>}],

      socialMedia: [
        {id:1, name:'Github', href:"", icon:""},
      ]
    }
  }

  render() {
      return (
      <React.Fragment>
        <NavBar menus = {this.state.menus} title = {this.state.title}/>
      </React.Fragment>
    );
  }

}

export default App;
