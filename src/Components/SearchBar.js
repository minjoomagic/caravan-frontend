import React from 'react'
import { withRouter } from 'react-router-dom'


class SearchBar extends React.Component{

  state = {
    searchTerm: ""
  }

  onChangeHandler = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  submitHandler = (e) =>{
    this.props.history.push("/items");
    let searchTerm = this.state.searchTerm
    this.props.submitHandler(searchTerm)
    // this.setState({searchTerm: ""})
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

export default withRouter(SearchBar)
