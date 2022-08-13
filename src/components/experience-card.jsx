import * as React from 'react';
import { Component } from 'react';

 
class ExperienceCard extends Component {
  
    render() { 
        return(

    <div className="position-relative me-4 my-5 pb-5">
        
        <div className="shadow" id="circle-corner"></div>
        <img src={this.props.experience.logo} className="corner-image"/>
         
        <div className="shadow card bg-light border-dark">
          <div className="card-body">
            <h5 className="card-title">{this.props.experience.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.experience.location}</h6>
            <h5 className="card-title">{this.props.experience.job}</h5>
            <p className="card-text">{this.props.experience.description}</p>
            <p className="card-text badge text-bg-dark">{this.props.experience.date}</p>
            
          </div>
        </div>
      </div>  
    );}
}

export default ExperienceCard;