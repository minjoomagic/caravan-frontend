import React from "react";
import "../Styling/UserInfo.css";
import { Card, Container, Col, Image } from "react-bootstrap";
import { capitalize } from "../Utilities/Utilities";

class UserInfo extends React.Component {
  render() {
    this.props.item.item
      ? console.log(this.props.item.item.name)
      : console.log("akh");
    console.log("this is my item's info: ", this.props.item.item);
    return (
      <Container className="user-container">
        {this.props.item.item ? (
          <Card className="card-user">
            <Image
              className="user-avatar"
              src="https://png.pngtree.com/svg/20170128/avatar_hipster_beard_flannel_872495.png"
              roundedCircle
            />

            <h2>
              Seller: {capitalize(this.props.item.item.users[0].username)}
            </h2>
            <h3>Phone: {this.props.item.item.users[0].phone_number}</h3>
            <h3>Address: {this.props.item.item.users[0].address}</h3>
          </Card>
        ) : null}
      </Container>
    );
  }
}

export default UserInfo;
