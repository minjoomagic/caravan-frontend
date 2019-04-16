import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg={this.props.color} variant="dark">
          <Navbar.Brand className={`fas fa-${this.props.logo}`} href="#home">
            {" "}
            {this.props.title}
          </Navbar.Brand>
        </Navbar>
        <Jumbotron>
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
        </Jumbotron>
        ;
      </div>
    );
  }
}

export default LandingPage;
