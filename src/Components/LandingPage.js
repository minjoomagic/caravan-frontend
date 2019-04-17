import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../Styling/LandingPage.css";

class LandingPage extends React.Component {
  render() {
    // let landingStyle = {
    //   width: "auto",
    //   height: "auto",
    //   margin: "auto"
    // };
    // <div className="background-pic" />;
    // style={landingStyle}

    return (
      <div>
        <Navbar bg={this.props.color} variant="dark">
          <Navbar.Brand className={`fas fa-${this.props.logo}`} href="#home">
            {" "}
            {this.props.title}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Button>
              <Nav.Link href="/items">Explore</Nav.Link>
            </Button>
            <Button>
              <Nav.Link href="/about">About</Nav.Link>
            </Button>
          </Nav>
        </Navbar>
        <div className="backgr-landing">
          <div className="overlay" />
          <div className="whatever">
            <h1 className={`fas fa-${this.props.logo}`}>Caravan</h1>
            <p>
              The best way to sell all your goods online. Pickup in person or
              delivery.
            </p>
            <p>
              <Button className="mr-2" variant="primary" href="/signup">
                Sign Up
              </Button>
              <Button className="mr-2" variant="primary" href="/login">
                LogIn
              </Button>
              <br />
              <br />
              <Button className="mr-2" variant="success" href="/items">
                Explore
              </Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
