import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../Utilities/Utilities";
import { Button, Card } from "react-bootstrap";

import "../Styling/ItemShow.css";

const ItemShow = props => {
  console.log("props from ItemShow", props.item.item);
  let { name, image_url, category, description, price } = props.item.item;

  const buyHandler = e => {
    e.preventDefault();
    console.log("buying this");
    props.item.buyHandler(props.item.item);
  };

  return (
    <Card className="show-card">
      <img className="show-image" src={image_url} alt="" />
      <Card.Body>
        <Card.Title>
          <h1>{capitalize(name)}</h1>
        </Card.Title>
        <Card.Text>
          <h3>Category: {capitalize(category)}</h3>
        </Card.Text>
        <Card.Text>
          <h3>Price: ${price} </h3>
        </Card.Text>
        <Card.Text>
          <h3>Description: {capitalize(description)}</h3>
        </Card.Text>
      </Card.Body>
      <Link to={"/items"}>
        <Button className="mr-2">Back</Button>
        <Button variant="success" onClick={buyHandler}>
          {" "}
          Buy{" "}
        </Button>
      </Link>
    </Card>
  );
};

// const Filter = (props) => {
//   return(
//     <div>
//       This is Filter
//       And <SearchBar submitHandler={props.submitHandler}/>
//       And <CategoryFilter categories={props.categories} selectHandler={props.selectHandler}/>
//     </div>
//   )
// }

export default ItemShow;
