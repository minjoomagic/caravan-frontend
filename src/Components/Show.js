import React from "react";
import "../Styling/Show.css";
import ItemShow from "./ItemShow";
import UserInfo from "./UserInfo";
import Map from "./Map";

class View extends React.Component {
  state = {
    item: {}
  };

  render() {
    return (
      <div className="view">
        <div className="left-side">
          <div className="item-main">
            <ItemShow buyHandler={this.props.buyHandler} item={this.props} />
          </div>
        </div>
        <div className="right-side">
<<<<<<< HEAD
          <UserInfo item={this.props} />
          <Map />
=======
         <UserInfo item={this.props}/>
         <Map location={this.props}/>
>>>>>>> fixing-map
        </div>
      </div>
    );
  }
}

export default View;
