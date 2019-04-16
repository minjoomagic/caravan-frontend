import React from "react";
import { Link } from "react-router-dom";
import SimpleNavBar from "./SimpleNavBar"
import UserHeader from "./ProfileComponents/UserHeader"
import UserItems from "./ProfileComponents/UserItems"
import UserPurchases from "./ProfileComponents/UserPurchases"

import '../Styling/MyPage.css';

class UsersContainer extends React.Component{

  state = {
    items: [],
    user: null
  }

  componentDidMount() {
    console.log("User Profile Did Mount!");
    this.fetchItems();
  }

  fetchItems = () => {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(items => {
        this.setState({
          items: items,
          user: this.props.user
         });
      });
  };

  render(){
    let myItems = this.state.items.filter(item => item.users[0].username === this.state.user.username && item.sold === false)
    let myPurchases = this.state.items.filter(item => item.users[0].username === this.state.user.username && item.sold === true)

    return (
      <div >
        <UserHeader
          title="Caravan"
          logo="truck"
          color="primary" />
        <div className="user-view">
          <div className="user-left-side">
            <UserItems items={myItems}/>
          </div>
          <div className="user-right-side">
            <UserPurchases items={myPurchases}/>
          </div>
        </div>
      </div>
    )
  }
}

export default UsersContainer
