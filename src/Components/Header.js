import React from "react";
import SearchBar from "./SearchBar";
import { capitalize } from "../Utilities/Utilities";
import CategoryFilter from "./CategoryFilter";
import { Navbar, Nav, Button } from "react-bootstrap";

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
      <Navbar bg={props.color} variant="dark">
        <Navbar.Brand className={`fas fa-${props.logo}`} href="/">
          {" "}
          {props.title}
        </Navbar.Brand>
        <Navbar.Brand>
          Hey {props.user ? capitalize(props.user.username) : null}!
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">My Items</Nav.Link>
          <Nav.Link href="#pricing">Purchase History</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={toggleForm}>
          Sell Item
        </Button>
        <Navbar.Brand>Search for an Item!</Navbar.Brand>
        <CategoryFilter
          categories={props.categories}
          selectHandler={props.selectHandler}
        />
        <SearchBar submitHandler={props.submitHandler} />
        <Button onClick={logOutHandler} variant="outline-light">
          {" "}
          Log Out{" "}
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
