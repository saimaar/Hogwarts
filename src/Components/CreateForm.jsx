import React, { Component } from 'react';

class CreateForm extends Component {
  state = {
    name: "",
    age: "",
    house: "",
    role: "",
    image1: "",
    image2: ""
  }

  handleAllChange = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    let newObj = this.state
    this.props.createNewCharacter(newObj)
  }

  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleAllChange}/>
          <br/>
          <input
            id="age"
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleAllChange}/>
          <br/>
          <input
            id="house"
            type="text"
            name="house"
            placeholder="house"
            value={this.state.house}
            onChange={this.handleAllChange}/>
          <br/>
          <input
            id="role"
            type="text"
            name="role"
            placeholder="role"
            value={this.state.role}
            onChange={this.handleAllChange}/>
          <br/>
          <input
            id="image1"
            type="text"
            name="image1"
            placeholder="image1"
            value={this.state.image1}
            onChange={this.handleAllChange}/>
          <br/>
          <input
            id="image2"
            type="text"
            name="image2"
            placeholder="image2"
            value={this.state.image2}
            onChange={this.handleAllChange}/>
            <br/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }

}

export default CreateForm;
