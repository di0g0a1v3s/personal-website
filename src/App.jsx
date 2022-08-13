import './App.css';
import NavBar from './components/navbar';
import AboutPage from './components/about-page';
import ExperiencePage from './components/experience-page';
import ProjectsPage from './components/projects-page';
import ContactsPage from './components/contacts-page';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = 
    {
      title : 'Diogo Alves',
      menus : [
        {id:1, name:'About', href:"/", icon: <i className="bi bi-person-lines-fill"></i> }, 
        {id:2, name:'Experience', href:"/experience", icon: <i className="bi bi-briefcase"></i>}, 
        {id:3, name:'Projects', href:"/projects", icon: <i className="bi bi-code-slash"></i> }, 
        {id:4, name:'Contacts', href:"/contacts", icon: <i className="bi bi-envelope"></i>}],

      socialMedia: [
        {id:1, name:'Github', href:"", icon:""},
      ],

      experience : [
        {
          id:1, 
          logo:"assets/inov_logo.svg",
          location:"Lisbon, Portugal",
          company:"INOV", 
          job: "Software Developer in the Cybersecurity Area", 
          date:"Apr 2021 – present",
          description: 
          <ul>
          <li>Research and development of an impact assessment tool to quantify the impact of cyber-threats on organizations' business-processes;</li>
          <li>Development of a web application to showcase possible attack vectors in E-commerce platforms;</li>
          <li>Development of a network tool to detect attacks against infrastructures, based on deviations from the expected business process flow;</li>
          <li>Preparation of Deliverables for European Projects.</li>
          <li><b>Tools &amp; Technologies</b>: Linux, Python, JavaScript, REST API, Java, MySQL, Bash scripting, Neo4j, NGINX, Wireshark/Tshark, Docker.</li>
          <li><b>Cyber Security Frameworks</b>: CVSS, NVD (CPE, CVE, CVSS), STRIDE (threat modelling), MITRE ATT&amp;CK.</li>
          </ul>
        },
        {
          id:2, 
          logo:"assets/thales_logo.svg",
          location:"Paço de Arcos, Portugal",
          company:"Thales Portugal", 
          job: "Android Developer (Internship)", 
          date:"Jul 2018 - Aug 2018",
          description: 
          <ul>
          <li>Development of a service for Android, with the goal of capturing data from the various sensors of the smartphone, do some processing and then send it to a server, where it would be later stored and processed.</li>
          <li><b>Tools &amp; Technologies</b>: Java, Android Studio, Realm.</li>
          </ul>
        },
      ],
      education:
      [
        {
          id:1, 
          logo:"assets/ist_logo.svg",
          location:"Lisbon, Portugal",
          company:"Instituto Superior Técnico, University of Lisbon", 
          job: "Master's in Electrical and Computer Engineering", 
          date:"Set 2019 - Jul 2021",
          description: 
          <ul>
          <li>Specialization in Computer Science</li>
          <li>Master's Thesis: "Calculating Business Impact Assessment of Cyber-Threats"</li>
          <li><b>Final grade: 18 out of 20</b></li>
          </ul>
        },
        {
          id:2, 
          logo:"assets/ist_logo.svg",
          location:"Lisbon, Portugal",
          company:"Instituto Superior Técnico, University of Lisbon", 
          job: "Bachelor's in Electrical and Computer Engineering", 
          date:"Set 2016 - Jul 2019",
          description: 
          <ul>
          <li><b>Final grade: 18 out of 20</b></li>
          </ul>
        },
      ],
      projects:
      [
        {id:1,
        title:"Arduino Game Console",
        description:"Game Console built with an Arduino, with the games Snake, Tetris, Breakout and Space Invaders",
        image:"assets/GameConsoleArduino.png",
        link:"https://github.com/di0g0a1v3s/GameConsole-in-Arduino"
        }
      ]
    }
  }

  render() {
      return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar menus = {this.state.menus} title = {this.state.title}/>
        
          <Routes>
            <Route path="/" element={<AboutPage/>}/>
            <Route path="/experience" element={<ExperiencePage experience = {this.state.experience} education = {this.state.education}/>}/>
            <Route path="/projects" element={<ProjectsPage projects = {this.state.projects}/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }

}

export default App;
