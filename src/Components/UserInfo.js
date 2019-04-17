import React from "react";
import "../Styling/UserInfo.css";
import { Card, Container, Col, Image, Button } from "react-bootstrap";
import { capitalize } from "../Utilities/Utilities";

class UserInfo extends React.Component {
  state = {
    phone: false,
    address: false
  };

  clickPhoneHandler = () => {
    this.setState({ phone: !this.state.phone });
  };

  clickAddressHandler = () => {
    this.setState({ address: !this.state.address });
  };

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
            <br />
            <br />
            <br />
            <br />
            <h2>
              Seller: {capitalize(this.props.item.item.users[0].username)}
            </h2>

            <Button
              variant="danger"
              className="fas fa-mobile-alt mr-2"
              onClick={this.clickPhoneHandler}
            >
              {" "}
              Phone Number
            </Button>
            {this.state.phone ? (
              <h3>Phone: {this.props.item.item.users[0].phone_number}</h3>
            ) : null}

            <Button
              variant="danger"
              className="fas fa-map-marked-alt mr-2"
              onClick={this.clickAddressHandler}
            >
              Address
            </Button>
            {this.state.address ? (
              <h3>Address: {this.props.item.item.users[0].address}</h3>
            ) : null}
          </Card>
        ) : null}
      </Container>
    );
  }
}

export default UserInfo;
