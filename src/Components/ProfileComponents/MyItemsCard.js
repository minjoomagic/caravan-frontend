import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { capitalize } from "../../Utilities/Utilities";
import "../../Styling/MyItemsCard.css";

// FOCUS WORK HERE, THIS IS WHERE WE HANDLE WHERE WE COME FROM TO EXECUTE DIFFERENT COMMANDS
class MyItemsCard extends React.Component {
  state = {
    name: "",
    price: "",
    image_url: "",
    description: ""
  };

  render() {
    let { name, category, price, image_url, description } = this.props.item;

    return (
      <React.Fragment>
        <div>
          <Card className="my-item-card" style={{ "margin-left": "200px", "width": "18rem" }}>
              <Card.Img className="my-item-image" variant="top" src={image_url} />
            <Card.Body>
              <Card.Title><h3>{capitalize(name)}</h3></Card.Title>
              <Card.Text>Category: {capitalize(category)}</Card.Text>
              <Card.Text>Price: ${price} </Card.Text>
              <Card.Text>Description: {capitalize(description)}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default MyItemsCard;
