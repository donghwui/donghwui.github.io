import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import xpertVR from "../assets/img/xpertvr.jpg";
import Goose from "../assets/img/goose.png";
import CrimeScene from "../assets/img/crimescene.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {



  const projects = [
    {
      title: "XpertVR",
      description: "Software Engineering Intern: Responsible for developing virtual reality simulations, debugging errors, and implementing interactive elements",
      imgUrl: xpertVR,
      linkUrl: "https://drive.google.com/file/d/180dmnAprYzwQNj_FN7zZCtw3_KijG1kr/view?usp=sharing"
    },
    {
      title: "gooSE",
      description: "SE101 Final Project: Remote-controlled guiding goose robot that supports users’ mental health, using Raspberry Pi, Python, Git, and HTML",
      imgUrl: Goose,
      linkUrl: "https://github.com/jamesj64/goose2/"
    },
    {
      title: "VR for Policing Students",
      description: "XpertVR Project: Immersive simulation-based eLearning materials for policing students at Conestoga’s VAR Lab",
      imgUrl: CrimeScene,
      linkUrl: "https://xpertvr.ca/case_studies/vr-elearning-materials-for-policing/"
    }
  ];

  return (
    <section className="project" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p> Selected work and projects I've worked on in the past</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}