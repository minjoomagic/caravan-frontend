import React from 'react'
import { Link } from "react-router-dom";
import { capitalize } from "../Utilities/Utilities";
import { Navbar, Nav, Button } from "react-bootstrap";

import '../Styling/ItemShow.css';

const ItemShow = (props) => {

  console.log("props from ItemShow", props.item.item)

  let {name, image_url} = props.item.item

  return(
    <div >
      <img className="item-show" src={image_url} alt="" />
      <h2>{capitalize(name)}</h2>
      <Link to={'/items'}>
        <Button>back</Button>
        <Button> Buy </Button>
      </Link>
    </div>
  )
}



// const Filter = (props) => {
//   return(
//     <div>
//       This is Filter
//       And <SearchBar submitHandler={props.submitHandler}/>
//       And <CategoryFilter categories={props.categories} selectHandler={props.selectHandler}/>
//     </div>
//   )
// }

export default ItemShow
