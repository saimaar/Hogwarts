import React from "react";
import UpdateForm from "./UpdateForm.jsx"

class House extends React.Component {
  state = {
    clicked: false,
    houseClicked: false
  }



 handleClick = (evt) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleHouse = (evt) => {

    this.setState({
      houseClicked: !this.state.houseClicked
    })

  }

  render(){
    let {image2, house, name, role, id} = this.props.hogwart
    let formDiv = this.state.houseClicked ? <UpdateForm id={id} updateCharacterHouse={this.props.updateCharacterHouse}/> : null



     let infoDiv = this.state.clicked ?
      <div>
        <h1 onClick={this.handleHouse}>{house}</h1>
          {formDiv}
        <h2>{name}</h2>
        <h2>{role}</h2>
      </div> :
        null


    return (
      <div className="house-div house">
        <h1>House</h1>
        <h2>{house}</h2>
        <img src= {image2} alt="" className="house-image" onClick={this.handleClick}/>
          {infoDiv}
      </div>
    )
  }
};

export default House;
