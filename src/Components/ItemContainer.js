import React from 'react'
import { Route, Switch } from "react-router-dom";
import Item from './Item'

const ItemContainer = (props) => {

  let items = props.items.map(item => <Item key={item.id} item={item}/>)

  console.log("items in item container", props.items)

  return(
    <div>
      <Switch>
        <Route
          path="/items/:id"
          render={routerProps => {
            let id = parseInt(routerProps.match.params.id)
            console.log("items are:", props.items)
            let item = props.items.find(
              item => item.id === id
            )
            console.log("FOUND ITEM:", item)
            return <Item item={item} />
          }}
        />
        <Route
          path="/items"
          render={() => {
            return (
              <div>
                {items}
              </div>
            );
          }}
        />
      </Switch>
    </div>
  )
}

export default ItemContainer
