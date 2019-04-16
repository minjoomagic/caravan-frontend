import React from "react";
import ItemCard from '../ItemCard'

class UserItems extends React.Component{
  render(){

    console.log(this.props.items)
    let items = this.props.items.map(item => <ItemCard key={item.id} item={item}/>)
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default UserItems
