import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { capitalize } from "../Utilities/Utilities";
import "../Styling/Item.css";
import "../Styling/ItemCard.css";

// FOCUS WORK HERE, THIS IS WHERE WE HANDLE WHERE WE COME FROM TO EXECUTE DIFFERENT COMMANDS
class Item extends React.Component {
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
          <Card className="card" style={{ width: "18rem" }}>
            <Link to={`/items/${this.props.item.id}`}>
              <Card.Img className="item-image" variant="top" src={image_url} />
            </Link>
            <Card.Body>
              <Card.Title>{capitalize(name)}</Card.Title>
              <Card.Text>Category: {category}</Card.Text>
              <Card.Text>Price: {price} $</Card.Text>
              <Card.Text>Description: {capitalize(description)}</Card.Text>
              <Link to={`/items/${this.props.item.id}`}>
                <Button variant="success">More Info</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
