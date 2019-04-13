import React from 'react'
import '../Styling/Show.css';
import Item from './Item'

class View extends React.Component{

  state ={
    item: {}
  }

  componenDidMount(){
    console.log("CDM - props from show", this.props)
  }

  render(){
    console.log("RENDER - props from show", this.props)
    return(
      <div className="view">
        <div className="left-side">
          <div className="item-main">
          {"olalalala"}
            {"render un item ici " }
            {console.log("this is the item", this.props.item)}
            <Item item={this.props}/>
          </div>
        </div>
        <div className="right-side">
         {"render sa desc ici"}
        </div>
      </div>
    )
  }

}

export default View
