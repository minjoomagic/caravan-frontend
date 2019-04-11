import React from 'react'

import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'

const Filter = (props) => {
  return(
    <div>
      This is Filter
      And <SearchBar submitHandler={props.submitHandler}/>
      And <CategoryFilter categories={props.categories} selectHandler={props.selectHandler}/>
    </div>
  )
}

export default Filter
