import React from "react";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Cards from "../components/Cards";

function Portfolio () {
  return (
<Container>
    {/* <Row>
      <Col className="col-lg-6 mb-5">
          <a href="https://tkuebler12.github.io/ProjectOne/" rel="noreferrer" target="_blank" className="card-links">
        <div className="card h-100">
          <img className="card-img-top img-thumbnail"
            src="Assets/Portfolio-images/ProjectOneStill.jpg"
            alt="Card cap"/>
          <div className="card-body">
            <h3 className="projectTitle">Ready S.E.T.T. Eat!</h3>
            <p className="card-text">
              I worked on a team to build this application using APIs, JQuery, and Materialize. 
              This app returns recipes and nutrition facts for desired ingredients.
            </p>
            <br/>
            <a className="gitLink" href="https://github.com/tkuebler12/ProjectOne" rel="noreferrer" target="_blank">Github</a>
          </div>
        </div>
    </a>
      </Col>

      <Col className="col-lg-6 mb-5">

          <a href="https://tianwes.github.io/Code_Quiz_using_Web_APIs/" rel="noreferrer" target="_blank" className="card-links">
        <div className="card h-100">
          <img className="card-img-top img-thumbnail"
            src="Assets/Portfolio-images/JavaScriptQuizStill.jpg"
            alt="Card cap" />
          <div className="card-body">
            <h3 className="projectTitle">Javascript Quiz</h3>
            <p className="card-text">
              A fun quiz on Javascript, made with Javascript! Complete with a timer and highscores page!
            </p>  
              <br />
            <a className="gitLink" href="https://github.com/Tianwes/Code_Quiz_using_Web_APIs" rel="noreferrer" target="_blank">Github</a>
          </div>
        </div>
     </a>
      </Col>
    </Row> */}
    <Cards />
</Container>
  )
}

export default Portfolio;