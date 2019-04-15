import React from 'react'
import { Dropdown, ButtonGroup, Button, FormControl, FormGroup, SplitButton, Form } from "react-bootstrap";


class SellForm extends React.Component {

  state = {
    item: {
      name: "",
      price: "",
      description: "",
      category: "",
      image_url: ""
    },
    user: null
  }

  componentDidMount(){
    this.setState({user: this.props.user})
  }

  changeHandler = (e) => {
    // const { name, price, description, category, image_url } = this.state.item

    let targetName = e.target.name

    this.setState({
      item: {
        ...this.state.item,
        [targetName]: e.target.value
      }})
  }

  selectHandler = (e) => {
    this.setState({
      item: {
        ...this.state.item,
        category: e.target.value
      }})
  }

  createSubmitHandler = () => {
    this.props.createSubmitHandler(this.state.item, this.state.user)
    this.setState({
      item: {
        name: "",
        price: "",
        description: "",
        category: "",
        image_url: ""
      }
    })
  }



  render() {
    let divStyle = {
      width: '800px',
      borderWidth: 'thick',
      borderColor: 'red',
      margin: '0 auto'
    };
    return(
      <div style={divStyle}>
        <Form>
          <Form.Group>
            <Form.Label>Item title</Form.Label>
            <Form.Control type="text" name="name" placeholder="Ikea table" value={this.state.item.name} onChange={this.changeHandler}/>
            <Form.Label>Item price</Form.Label>
            <Form.Control type="number" name="price" placeholder="1000" value={this.state.item.price} onChange={this.changeHandler}/>
            <Form.Label>Item description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Very good condition" value={this.state.item.description} onChange={this.changeHandler}/>
            <Form.Label>Image url </Form.Label>
            <Form.Control type="text" name="image_url" placeholder="https://www.google.com/duck-duck.jpg" value={this.state.item.image_url} onChange={this.changeHandler}/>
            <Form.Label>Select category</Form.Label>
            <Form.Control placeholder="Select category" as="select"  onChange={this.selectHandler}>
                {this.props.categories.map(category => {
                  return <option  value={`${category.name}`}>{category.name}</option>
                })}
            </Form.Control>
            <Button onClick={this.createSubmitHandler} >Post Item for Sale</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default SellForm
