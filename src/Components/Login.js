import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginHandler = () => {
    this.props.onLoginHandler(this.state);
  };

  render() {
    return (
      <div>
        <Navbar bg={this.props.color} variant="dark">
          <Navbar.Brand className={`fas fa-${this.props.logo}`} href="/">
            {" "}
            {this.props.title}-Login
          </Navbar.Brand>
        </Navbar>
        <Jumbotron>
          <h1 className={`fas fa-${this.props.logo}`}>Caravan-Login</h1>
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

        <Container className="App">
          <h2>Welcome back to Caravan! Login to get started again!</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  onChange={this.onChangeHandler}
                  type="text"
                  name="username"
                  placeholder="My Username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  onChange={this.onChangeHandler}
                  type="password"
                  name="password"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button variant="primary" onClick={this.onLoginHandler}>
              Log in
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
