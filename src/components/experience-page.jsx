import * as React from 'react';
import { Component } from 'react';
import ExperienceCard from './experience-card';

 
class ExperiencePage extends Component {
  
    render() { 
        return(

<div className="row">
    <div className='col-md-8 offset-md-2 p-3 flex-wrap align-items-center'>
        <div className="mt-4 mb-3">
            <h2>Professional Experience</h2>
        </div>
        {this.props.experience.map(exp => <ExperienceCard experience={exp}/>)}
    </div>
    <div className='col-md-8 offset-md-2 p-3 flex-wrap align-items-center'>
    <div className="mt-4 mb-3">
            <h2>Education</h2>
        </div>
        {this.props.education.map(exp => <ExperienceCard experience={exp}/>)}
    </div>
</div>

    );}
}

export default ExperiencePage;