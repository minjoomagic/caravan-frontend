import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class UserHeader extends React.Component{
  render(){

          let logInStyle = {
            width: "auto",
            margin: "0 auto"
          };



          return (
            <div style={logInStyle}>
              <Navbar bg={this.props.color} variant="dark">
                <Navbar.Brand className={`fas fa-${this.props.logo}`} href="/">
                  {" "}
                  {this.props.title}-My Page
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/items">Home</Nav.Link>
                </Nav>
              </Navbar>

              </div>
      )
        }
      }


export default UserHeader
