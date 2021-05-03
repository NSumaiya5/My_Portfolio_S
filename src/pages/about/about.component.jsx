import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/n1 (1).png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center text-white font-details pb-3 b">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col> */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <div className="text-white d-flex justify-content-center">
               <p className="text-white justify-content-center"> Hi there! I am <strong>&nbsp;Sumaiya Aktar</strong>
               I am studying B.Sc. in Computer Science and Engineering in IUBAT. I am proficient in Reactjs,JavaScript, Es6, html, CSS, Bootstap,Mongodb, NodeJS, MySql, Express JS.
  
               Among all the courses I really enjoyed the designing and problem solving courses. I was very interested about organizing and problem solving and now it is my passion.
                
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                </p>
                </div>
                <Col className="d-flex justify-content-center flex-wrap">
                 
        
                  <div>
                    <a href="https://github.com/NSumaiya5" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/sumaiya-aktar-67b262168/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ms-5 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col> 
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
