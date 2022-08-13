import './App.css';
import NavBar from './components/navbar';
import AboutPage from './components/about-page';
import ExperiencePage from './components/experience-page';
import ProjectsPage from './components/projects-page';
import ContactsPage from './components/contacts-page';
import Footer from './components/footer';
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
      ],

      socialMedia: [
        {id:1, name:'Email me', href:"mailto:diogo-alves1998@hotmail.com", icon:<i className="bi bi-envelope footnote-icon"></i>},
        {id:2, name:'GitHub', href:"https://github.com/di0g0a1v3s", icon:<i className="bi bi-github footnote-icon"></i>},
        {id:3, name:'Linked in', href:"https://www.linkedin.com/in/diogo-alves-b01a28196/", icon:<i className="bi bi-linkedin footnote-icon"></i>},
        
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
        description:<>Game Console built with an <b>Arduino</b>, with the games Snake, Tetris, Breakout and Space Invaders.</>,
        image:"assets/GameConsoleArduino.png",
        link:"https://github.com/di0g0a1v3s/GameConsole-in-Arduino"
        },
        {id:2,
          title:"Personal Website",
          description:<>This website that you are seeing, to share my projects and making myself known. The website was developed using <b>React</b>, <b>JavaScript</b> and <b>Bootstrap</b>, and is hosted on <b>FireBase.</b></>,
          image:"assets/Website.png",
          link:"https://github.com/di0g0a1v3s/personal-website"
        } ,
        {id:3,
          title:"Full Stack Web Application",
          description: <>Youtube-like Web Application using <b>Python Flask</b>, <b>SQLAlchemy</b>, <b>FlaskXMLRPC</b> for the backend, and <b>JavaScript</b>, <b>HTML</b> for the frontend.</>,
          image:"assets/FullStackApp.png",
          link:"https://github.com/di0g0a1v3s/WebDevelopment-with-Python-Flask"
        } ,
        {id:4,
          title:"Stock Analysis",
          description:<><b>Python</b> script to analyse stock data.</>,
          image:"assets/StockAnalysis.png",
          link:"https://github.com/di0g0a1v3s/StockAnalysis-in-Python"
        } ,
        {id:5,
          title:"ZerUns Solving Algorithm",
          description:<>Algorithm to solve Sudoku-like game using <b>C</b>.</>,
          image:"assets/ZerUns.png",
          link:"https://github.com/di0g0a1v3s/ZerUns-in-C"
        } ,
        {id:6,
          title:"Sensor Logging Application",
          description:<>Android App to collect and analyze smartphone sensor data. Developed in <b>Java</b> using <b>Android Studio</b>.</>,
          image:"assets/SensorLogging.png",
          link:"https://github.com/di0g0a1v3s/SensorLogging-Android"
        } ,
        {id:7,
          title:"Train Delays",
          description:<><b>Python</b> Script to determine the status of trains passing through a given station. Built using Comboios de Portugal unofficial API.</>,
          image:"assets/TrainDelays.jpg",
          link:"https://github.com/di0g0a1v3s/TrainDelays-in-Python"
        } ,
        {id:8,
          title:"Naive Bayes Classifier",
          description:<>Implementation of a Naive Bayes Classifier using Objected Oriented Programming in <b>Java</b>.</>,
          image:"assets/NaiveBayesClassifier.png",
          link:"https://github.com/di0g0a1v3s/NaiveBayesClassifier-in-Java"
        },
        {id:9,
          title:"Memory Game",
          description:<>Implementation of the memory game in <b>C</b> using distributed computing - threads, sockets, synchronization mechanisms, etc.</>,
          image:"assets/MemoryGame.png",
          link:"https://github.com/di0g0a1v3s/MemoryGameDistributed-in-C"
        } ,
        {id:10,
          title:"Homomorphic Voting System",
          description:<>Homomorphic Vote Tally Project using <b>C++</b> and the <b>Microsoft SEAL</b> library.</>,
          image:"assets/HomomorphicVote.png",
          link:"https://github.com/di0g0a1v3s/HomomorphicVoteTally-in-C-"
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
          <Footer socialMedia = {this.state.socialMedia}/>
        </BrowserRouter>
      </React.Fragment>
    );
  }

}

export default App;
