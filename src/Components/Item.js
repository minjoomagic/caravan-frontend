import React from 'react'
import '../Styling/Item.css';

const Item = (props) => {

  let {name, category, price, image_url, description} = props.item

  return(
    <div>
      <img src={image_url} alt="" />
      <h2>{name}</h2>
      <h2>Category: {category}</h2>
      <h2>Price: {price}</h2>
      <h2>Description: {description}</h2>
    </div>
  )
}

export default Item
