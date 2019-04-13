import React from 'react'
import '../Styling/Show.css';
import Item from './Item'
import UserInfo from './UserInfo'

class View extends React.Component{

  state ={
    item: {}
  }

  componenDidMount(){
    console.log("CDM - props from show", this.props)
  }

  render(){
    return(
      <div className="view">
        <div className="left-side">
          <div className="item-main">
            {"render un item ici " }
            <Item item={this.props}/>
          </div>
        </div>
        <div className="right-side">
         {"render sa desc ici"}
         <UserInfo item={this.props}/>
        </div>
      </div>
    )
  }

}

export default View
