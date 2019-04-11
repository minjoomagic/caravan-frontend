import React from 'react'
import Filter from './Filter'
import Form from './Form'
import ItemContainer from './ItemContainer'

class Main extends React.Component{

  render(){
    return(
      <div>
        <Filter />
        <Form />
        <ItemContainer />
      </div>
    )
  }

}

export default Main
