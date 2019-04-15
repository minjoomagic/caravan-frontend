import React from 'react'
import { withRouter } from 'react-router-dom'
import { Dropdown, ButtonGroup, Button, FormControl, FormGroup, SplitButton, Form } from "react-bootstrap";



const CategoryFilter = (props) => {

  const selectHandler = (e) =>{
    console.log("ON CHANGE firing!", e.target.value)
    props.history.push("/items");
    props.selectHandler(e.target.value)
  }

  // <Dropdown as={ButtonGroup}>
  //   <Button variant="success">Split Button</Button>
  //
  //   <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  //
  //   <Dropdown.Menu>
  //     <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
  //     <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
  //     <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
  //   </Dropdown.Menu>
  // </Dropdown>;

  return(
    <div>
    <Form controlId="exampleForm.ControlSelect1">
      <Form.Control as="select"  onChange={selectHandler}>
        <option  value="All">All</option>
          {props.categories.map(category => {
            return <option  value={`${category.name}`}>{category.name}</option>
          })}
      </Form.Control>
    </Form>

    </div>
  )
}

export default withRouter(CategoryFilter)
