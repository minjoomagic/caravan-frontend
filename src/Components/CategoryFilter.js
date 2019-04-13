import React from 'react'
import { withRouter } from 'react-router-dom'


const CategoryFilter = (props) => {

  const selectHandler = (e) =>{
    console.log("firing!")
    props.history.push("/items");
    props.selectHandler(e.target.value)
  }


  return(
    <div>
    <select onChange={selectHandler}>
    <option value="All">All</option>
      {props.categories.map(category => {
        return <option value={`${category.name}`}>{category.name}</option>
      })}
      </select>
    </div>
  )
}

export default withRouter(CategoryFilter)
