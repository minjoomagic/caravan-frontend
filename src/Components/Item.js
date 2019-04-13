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
        { this.props.item.item ?
          <div>
             <Link to={'/items'}>
              <button> Back to Items </button>
             </Link>
             <img src={this.props.item.item.image_url} alt="" />
             <h2>{this.props.item.item.name}</h2>
             <h2>Category: {this.props.item.item.category}</h2>
             <h2>Price: {this.props.item.item.price}</h2>
             <h2>Description: {this.props.item.item.description}</h2>
           </div> :
           <div>
              <Link to={`/items/${this.props.item.id}`}>
                <img src={image_url} alt="" />
              </Link>
              <h2>{name}</h2>
              <h2>Category: {category}</h2>
              <h2>Price: {price}</h2>
              <h2>Description: {description}</h2>
            </div>
         }
         </React.Fragment>
      )
    }
}

export default Item
