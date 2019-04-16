import React from "react";
import MyItemsCard from './MyItemsCard'

class UserItems extends React.Component{
  render(){

    console.log(this.props.items)
    let items = this.props.items.map(item => <MyItemsCard key={item.id} item={item}/>)
    return (
      <div>
        <div >
        {items}
        </div>
      </div>
    )
  }
}

export default UserItems
