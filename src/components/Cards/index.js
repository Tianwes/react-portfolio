import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
// import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image"

import "./style.css";

function Cards() {
  return (
    <>
      <CardDeck className="container-fluid text-center">
        <Row className="mx-3">
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://gentle-castle-13144.herokuapp.com/"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/reel-junkie.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">Reel Junkie</Card.Title>
                  <Card.Text>
                    It is a movie junkies dream! Earn badges by adding movies
                    you've seen to your "Watched List". And keep track of movies
                    you wish to see by adding to your "Watch List."
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Nickpodski/reel_junkie"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://radiant-island-35045.herokuapp.com/login"
            >
              <Card>
                <Card.Img variant="top" src="/DnDImage.jpg" />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    My DnD Spellbook
                  </Card.Title>
                  <Card.Text>
                    A web application for Dungeons & Dragons players. This app
                    provides all the available spells and their stats (5E),
                    which can be added to or removed from a personal spellbook.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Nickpodski/My_DND_SpellBook"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://tkuebler12.github.io/ProjectOne/"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/ProjectOneStill.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Ready S.E.T.T. Eat!
                  </Card.Title>
                  <Card.Text>
                    Ready S.E.T.T. Eat! allows users to search for a recipe's
                    ingredients and search for an individual ingredient's
                    nutritional value. This helps a user become more aware and
                    in control of what they are consuming for their health.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/tkuebler12/ProjectOne"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://sleepy-caverns-65739.herokuapp.com/?id=607c4d8f8ed51e00150b56af"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/workoutTracker.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">Workout Tracker</Card.Title>
                  <Card.Text>
                    Users can log multiple cardio or resistance workouts daily
                    and this app keeps track of the name, type, weight, sets,
                    reps, and duration and distance of exercises. I worked on
                    the back-end of this application.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tianwes/workout-tracker"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://tianwes.github.io/Code_Quiz_using_Web_APIs/"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/JavaScriptQuizStill.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Javascript Quizzer
                  </Card.Title>
                  <Card.Text>
                    Simply a Javascript application that's a quizzez you on
                    Javascript. It's timed and keeps track of high-scores. Can
                    you make it on leader-board?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tianwes/Code_Quiz_using_Web_APIs"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://tianwes.github.io/JQuery-API-Work-Day-Planner/"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/JavascriptWorkPlanner.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Work Day Planner
                  </Card.Title>
                  <Card.Text>
                    This application helps you to keep track of your
                    work-schedule, hour-by-hour. The current hour-block is
                    highlighted for ease-of-use, past and future hours have
                    signfying colors.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tianwes/JQuery-API-Work-Day-Planner"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://tianwes.github.io/react-employee-directory/"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/employee-directory.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Employee Directory
                  </Card.Title>
                  <Card.Text>
                    Built with React, Useful for employers, this responsive app
                    filters an Employee database as you type, returning matches.
                    You can sort employees by first or last name.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tianwes/react-employee-directory/tree/main/employeedirectory"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a
              className="card-links"
              target="_blank"
              rel="noreferrer"
              href="https://mysterious-chamber-46750.herokuapp.com/"
            >
              <Card>
                <Card.Img variant="top" src="/note-taker.jpg" />
                <Card.Body>
                  <Card.Title className="cardTitle">Note Taker</Card.Title>
                  <Card.Text>
                    Stay organized with this note taker built with javascript
                    and run on Express. You can create and delete notes which
                    are saved locally, so you can leave and come back when you
                    need.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    className="gitLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Tianwes/Express.js-Note-Taker"
                  >
                    <small className="text-muted">GitHub</small>
                  </a>
                </Card.Footer>
              </Card>
            </a>
          </Col>
        </Row>
      </CardDeck>
    </>
  );
}

export default Cards;
