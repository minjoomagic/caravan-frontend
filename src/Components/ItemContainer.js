import React from 'react'
import Item from './Item'

const ItemContainer = (props) => {

  let items = props.items.map(item => <Item key={item.id} item={item}/>)

  return(
    <div>
      {items}
    </div>
  )
}

export default ItemContainer
