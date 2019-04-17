import React from "react";
import { withRouter} from "react-router-dom";
import {
  Dropdown,
  ButtonGroup,
  Button,
  FormControl,
  FormGroup,
  SplitButton,
  Form,

} from "react-bootstrap";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const CategoryFilter = props => {
  const selectHandler = e => {
    console.log("ON CHANGE firing!", e.target.value);
    props.history.push("/items");
    props.selectHandler(e.target.value);
  };

  return (
    <div>
      <Form className="mr-2" controlId="exampleForm.ControlSelect1">
        <InputGroup>
          <InputGroupAddon className="category-pre" addonType="prepend">Category</InputGroupAddon>
          <Form.Control as="select" onChange={selectHandler}>
          <option value="All">All</option>
          {props.categories.map(category => {
            return <option value={`${category.name}`}>{category.name}</option>;
          })}
          </Form.Control>
        </InputGroup>
      </Form>
    </div>
  );
};

export default withRouter(CategoryFilter);
