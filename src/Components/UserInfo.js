import React from 'react'
import '../Styling/UserInfo.css';

class UserInfo extends React.Component{

  render(){
    this.props.item.item ? console.log(this.props.item.item.name) : console.log("akh")
    return(
      <div className="user-info">
        {
          this.props.item.item ?
          <div>
            <h1>{this.props.item.item.users[0].username}</h1>
            <h1>{this.props.item.item.users[0].phone_number}</h1>
            <h1>{this.props.item.item.users[0].address}</h1>
          </div>
          :
          null
        }
      </div>
    )
  }

}

export default UserInfo
