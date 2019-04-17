import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class MyItems extends React.Component{
  render(){
    let logInStyle = {
      width: "800px",
      margin: "0 auto"
    };

    let inputStyle = {
      width: "400px",
      borderWidth: "normal",
      borderColor: "green",
      margin: "0 auto"
    };

    return (
      <div style={logInStyle}>
        <Navbar bg={this.props.color} variant="dark">
          <Navbar.Brand className={`fas fa-${this.props.logo}`} href="/">
            {" "}
            {this.props.title}-My Items
          </Navbar.Brand>
        </Navbar>
        <Jumbotron>
        </Jumbotron>
        </div>
)
  }
}

export default MyItems
