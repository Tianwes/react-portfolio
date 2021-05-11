import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div className="bg">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="mx-3">About Me</h1>
          </Col>
        </Row>
        <Row>
        <Col size="md-6">
          <img src="/Portfolio-images/About-me-portfolio-pic.jpg"
            className="float-left img-thumbnail mx-3" alt="Tiffany Weaver" fluid/>
            </Col>
         <Col size="md-6">
          <p className="about-me-paragraph m-4">Hello! My name is Tiffany Weaver and I'm a full-stack web developer.   
              I have a passion for coding, design and actualizing ideas. 
              I have earned my web-developement certificate from the University of Central Florida's Coding Bootcamp. 
              I'm fluent in the front-end with HTML, CSS, Javascript, JQuery, Bootstrap and Materialize. With the back-end 
              I've worked with Node.js, Express.js, Sequelize and MySQL, Mongo and Mongoose, AJAX, and web APIs.
            </p>
                <br/>
            <p className="about-me-paragraph mx-4">When I'm not composing with code I can be found petting the nearest cat, gaming, crafting, biking, or geocaching.  
              In all things, I like to find a balance...except when it comes to cats and web developing...
          </p>
                <br/>
          <a className="downloadRes mx-4" href="/Resume-TiffanyWeaver.pdf" target="_blank">Find my resume here</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
