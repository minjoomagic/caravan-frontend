import React from 'react'

const CategoryFilter = (props) => {

  const selectHandler = (e) =>{
    console.log("firing!")
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

export default CategoryFilter
