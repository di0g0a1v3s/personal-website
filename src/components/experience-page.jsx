import * as React from 'react';
import { Component } from 'react';
import ExperienceCard from './experience-card';

 
class ExperiencePage extends Component {
  
    render() { 
        return(

<div className="row">
    <div className='col-10 offset-1 col-sm-8 offset-sm-2 flex-wrap align-items-center'>
        <div className="mt-4 pb-2">
            <h1 className="title-format">Professional Experience</h1>
        </div>
        {this.props.experience.map(exp => <ExperienceCard experience={exp}/>)}
    </div>
    <div className='col-10 offset-1 col-sm-8 offset-sm-2 flex-wrap align-items-center'>
    <div className="mt-4 pb-2">
            <h1 className="title-format">Education</h1>
        </div>
        {this.props.education.map(exp => <ExperienceCard experience={exp}/>)}
    </div>
</div>

    );}
}

export default ExperiencePage;