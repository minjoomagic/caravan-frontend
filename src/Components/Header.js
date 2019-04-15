import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

//to activate bootstrap you need to install it 'npm install react-bootstrap bootstrap' type this into terminal

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg={this.props.color} variant="dark">
          <Navbar.Brand className={`fas fa-${this.props.logo}`} href="#home">
            {" "}
            {this.props.title}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">My Items</Nav.Link>
            <Nav.Link href="#pricing">Purchase History</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
