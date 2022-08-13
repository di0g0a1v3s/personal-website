import * as React from 'react';
import { Component } from 'react';
import ProjectCard from './project-card';

 
class ProjectsPage extends Component {
  
    render() { 
        return(
<div className="row">
    <div className='col-md-8 offset-md-2 p-3 flex-wrap align-items-center'>
        <div className="mt-4 mb-3">
            <h2>Side Projects</h2>
        </div>
        <div>
            A collection of side projects...
        </div>
        {this.props.projects.map(project => <ProjectCard project={project}/>)}
    </div>
</div>
    );}
}

export default ProjectsPage;