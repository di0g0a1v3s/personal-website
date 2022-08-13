import * as React from 'react';
import { Component } from 'react';

 
class ProjectCard extends Component {
  
    render() { 
        return(

          <div className="card">
          <img src={this.props.project.image} className="bd-placeholder-img card-img-top" width="100%"></img>

          <div className="card-body">
            <h5 className="card-title">{this.props.project.title}</h5>
            <p className="card-text">{this.props.project.description}</p>
            <a href={this.props.project.link} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );}
}

export default ProjectCard;