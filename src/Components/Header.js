import React from "react";
import SearchBar from "./SearchBar";
import { capitalize } from "../Utilities/Utilities";
import CategoryFilter from "./CategoryFilter";
import { Navbar, Nav, Button } from "react-bootstrap";
import Alert from './Alert'
import "../Styling/Header.css";

const Header = props => {
  console.log("props of header:", props);

  const toggleForm = () => {
    console.log("Toggle Form firing!");
    props.toggleFormHandler();
  };

  const logOutHandler = () => {
    props.logOutHandler();
  };

  return (
    <div>
      <Navbar className="header" bg={props.color} variant="dark">
        <Navbar.Brand className={`fas fa-${props.logo}`} href="/">
          {" "}
          {props.title}
        </Navbar.Brand>
        <Navbar.Brand>
          Hey {props.user ? capitalize(props.user.username) : "guest"}!
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/items">Home</Nav.Link>
          {props.user ? <Nav.Link href="/me">My Profile</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link> }
        </Nav>
        <Nav className="make-middle">
        <Button className="mr-5" variant="outline-light" onClick={toggleForm}>
        Sell Item
        </Button>
          <CategoryFilter
            categories={props.categories}
            selectHandler={props.selectHandler}
          />
          <SearchBar submitHandler={props.submitHandler} />
        </Nav>
        {props.user ? <Button onClick={logOutHandler} variant="outline-light">LogOut</Button> : null }
      </Navbar>
    </div>
  );
};

export default Header;
