import React, { Component } from 'react';

class SearchForm extends Component {


    handleChange=(evt) => {
      let searchInput = evt.target.value
        this.props.updateSearchTerm(searchInput)
    }




  render() {
    return (
      <div>
          <input
            type ="text"
            value={this.props.searchInput}
            onChange={this.handleChange}
            placeholder="search"
            />
      </div>
    );
  }

}

export default SearchForm;
