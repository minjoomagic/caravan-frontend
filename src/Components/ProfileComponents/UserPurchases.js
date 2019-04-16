import React from "react";
import MyItemsCard from './MyItemsCard'

class UserPurchases extends React.Component{
  render(){

    console.log(this.props.items)
    let items = this.props.items.map(item => <MyItemsCard key={item.id} item={item}/>)
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default UserPurchases
