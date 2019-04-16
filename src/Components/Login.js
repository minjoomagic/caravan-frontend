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
    let logInStyle = {
      width: "800px",
      margin: "0 auto"
    };

    let inputStyle = {
      width: "400px",
      borderWidth: "thick",
      borderColor: "green",
      margin: "0 auto"
    };

    return (
      <div style={logInStyle}>
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

          <Container className="App">
            <h3>Welcome back to Caravan! Login to get started again!</h3>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    type="text"
                    name="username"
                    placeholder="My Username"
                    style={inputStyle}
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
                    style={inputStyle}
                  />
                </FormGroup>
              </Col>
              <Button variant="primary" onClick={this.onLoginHandler}>
                Log in
              </Button>
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(Login);
