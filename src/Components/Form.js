import React from 'react'

class Form extends React.Component {

  state = {
    name: "",
    price: "",
    description: "",
    category: "",
    image_url: ""
  }

  changeHandler = (e) => {
    console.log('hello', e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  selectHandler = (e) => {
    this.setState({category: e.target.value})
  }

  createSubmitHandler = () => {
    this.props.createSubmitHandler(this.state)
    this.setState({
      name: "",
      price: "",
      description: "",
      category: "",
      image_url: ""
    })
  }

  render() {


    return(
      <div>
        <label>
           Name:
           <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
           Price:
           <input type="text" name="price" value={this.state.price} onChange={this.changeHandler} />
           Description:
           <input type="text" name="description" value={this.state.description} onChange={this.changeHandler} />
           Image_url:
           <input type="text" name="image_url" value={this.state.image_url} onChange={this.changeHandler} />
           <select onChange={this.selectHandler}>
             {this.props.categories.map(category => {
               return <option value={`${category.name}`}>{category.name}</option>
             })}
           </select>
        </label>
           <button onClick={this.createSubmitHandler}  >Add Item</button>
      </div>
    )
  }
}

export default Form
