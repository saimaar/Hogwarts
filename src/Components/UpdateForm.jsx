import React, { Component } from 'react';

class UpdateForm extends Component {
  state = {
    house: "house"
  }


  handleChange=(evt) => {
    this.setState({
      house: evt.target.value
    })
  }

  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.updateCharacterHouse(this.props.id, this.state.house)
  }


  render() {
    // console.log(this.props);
    let {house} = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
         id="house"
         type="text"
         name="house"
         value={house}
         onChange={this.handleChange}
         />
         <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }

}

export default UpdateForm;
