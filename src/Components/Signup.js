import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    address: "",
    phoneNumber: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCreateUserHandler = () => {
    this.props.onCreateUserHandler(this.state);
  };

  render() {
    let inputStyle = {
      width: "400px",
      borderWidth: "normal",
      borderColor: "green",
      margin: "0 auto"
    };

    return (
      <div>
        <Navbar bg={this.props.color} variant="dark">
          <Navbar.Brand className={`fas fa-${this.props.logo}`} href="/">
            {" "}
            {this.props.title}-Signup
          </Navbar.Brand>
        </Navbar>
        <Jumbotron>
          <h1 className={`fas fa-${this.props.logo}`}>Caravan-Signup</h1>
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

          <h3 className="App"> Welcome to Caravan! Signup to get started! </h3>
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
                  placeholder="Password"
                  style={inputStyle}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  onChange={this.onChangeHandler}
                  type="text"
                  name="address"
                  placeholder="Address"
                  style={inputStyle}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input
                  onChange={this.onChangeHandler}
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  style={inputStyle}
                />
              </FormGroup>
            </Col>
            <Button variant="primary" onClick={this.onCreateUserHandler}>
              Create Account
            </Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default Signup;
