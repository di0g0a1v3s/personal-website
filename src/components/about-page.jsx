import * as React from 'react';
import { Component } from 'react';
import HobbyCard from './hobby-card';

 
class AboutPage extends Component {
  
    render() { 
        return(
<div className="row">
    <div className='col-10 offset-1 col-sm-8 offset-sm-2 flex-wrap align-items-center'>
        <div className='col-6'>
            <img className="img-fluid" src={this.props.aboutAnimation}></img>
        </div>
    </div>
    <div className='col-10 offset-1 col-sm-8 offset-sm-2 flex-wrap align-items-center'>
        <div className="mt-4 mb-3">
            <h1 className="title-format">Hobbies</h1>
        </div>
        <div>
        <h3>Here is a gallery with activities that I enjoy doing in my free time.</h3>
        </div>
        <HobbyCard/>
    </div>
</div>

    );}
}

export default AboutPage;