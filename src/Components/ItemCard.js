import React from 'react'
import { Link } from "react-router-dom";
import '../Styling/Item.css';


// FOCUS WORK HERE, THIS IS WHERE WE HANDLE WHERE WE COME FROM TO EXECUTE DIFFERENT COMMANDS
class Item extends React.Component {

  state = {
    name: "",
    price: "",
    image_url: "",
    description: ""
  }


  render(){

      let {name, category, price, image_url, description} = this.props.item

      return(

      <React.Fragment>

          <div>
              <Link to={`/items/${this.props.item.id}`}>
                <img src={image_url} alt="" />
              </Link>
              <h2>{name}</h2>
              <h2>Category: {category}</h2>
              <h2>Price: {price}</h2>
              <h2>Description: {description}</h2>
            </div>
         
         </React.Fragment>
      )
    }
}

export default Item
