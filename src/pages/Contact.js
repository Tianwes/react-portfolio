import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";

// DO I NEED A FORM COMPONENT??? PROBS //////////////////////////////////////////

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <a
              href="https://www.linkedin.com/in/tiffany-weaver-dev/"
              target="_blank"
              rel="noreferrer"
              className="fa fa-linkedin"
            >{null}</a>
            <a
              href="https://twitter.com/TiffanyndBeyond"
              target="_blank"
              rel="noreferrer"
              className="fa fa-twitter"
            >{null}</a>
            <a
              href="https://github.com/Tianwes"
              target="_blank"
              rel="noreferrer"
              className="fa fa-github"
            >{null}</a>
            <hr />
          </Col>
        </Row>
        <Row>
          <h6 className="col-5 fa fa-envelope"> tianweavers@gmail.com</h6>
          <br />
          <h6 className="col-5 fa fa-phone"> 478-954-6970</h6>
        </Row>
        <Form />
      </Container>
    </div>
  );
}

export default Contact;
