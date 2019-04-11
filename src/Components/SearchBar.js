import React from 'react'



class SearchBar extends React.Component{

  state = {
    searchTerm: ""
  }

  onChangeHandler = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  submitHandler = (e) =>{
    this.props.submitHandler(this.state.searchTerm)
  }

  render(){
    return(
      <div>
        <label>
        Search:
        <input onChange={this.onChangeHandler} type="text" name="search" value={this.state.searchTerm}/>
        </label>
        <button onClick={this.submitHandler}> Search </button>
      </div>
    )
  }




}

export default SearchBar
