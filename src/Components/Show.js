import React from 'react'
import '../Styling/Show.css';
import ItemShow from './ItemShow'
import UserInfo from './UserInfo'

class View extends React.Component{

  state ={
    item: {}
  }

  render(){
    return(
      <div className="view">
        <div className="left-side">
          <div className="item-main">
            {"render un item ici " }
            <ItemShow item={this.props}/>
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
