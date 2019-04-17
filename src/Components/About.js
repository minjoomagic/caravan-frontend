import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../Styling/About.css";

const About = props => {
  // let landingStyle = {
  //   width: "auto",
  //   height: "auto",
  //   margin: "auto"
  // };

  // style={landingStyle}
  return (
    <div>
      <Navbar bg={props.color} variant="dark">
        <Navbar.Brand className={`fas fa-${props.logo}`} href="#home">
          {" "}
          {props.title}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Button>
            <Nav.Link href="/items">Explore</Nav.Link>
          </Button>
          <Button>
            <Nav.Link href="/">Back</Nav.Link>
          </Button>
        </Nav>
      </Navbar>
      <Jumbotron className="jumbo-tron">
        <div className="overlay" />
        <h1 className={`fas fa-${props.logo}`}>Caravan</h1>
        <br />
        <br />
        <h5>Proudly brought to you by:</h5>
        <br />
        <h4>Camille Feghali and Robert Han</h4>
      </Jumbotron>
      ;
    </div>
  );
};
export default About;
