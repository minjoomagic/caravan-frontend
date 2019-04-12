import React from 'react'
import { Link } from "react-router-dom";
import '../Styling/Item.css';

const Item = (props) => {

  let {name, category, price, image_url, description} = props.item

  console.log("props in item component", props.item)

  return(

    <div>
      <Link to={`/items/${props.item.id}`}>
        <img src={image_url} alt="" />
      </Link>
      <h2>{name}</h2>
      <h2>Category: {category}</h2>
      <h2>Price: {price}</h2>
      <h2>Description: {description}</h2>
    </div>
  )
}

export default Item
