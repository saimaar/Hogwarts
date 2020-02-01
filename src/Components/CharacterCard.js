import React from "react";
import UpdateForm from "./UpdateForm.jsx"

class CharacterCard extends React.Component {

  state ={
    showUpdateForm: false
  }

  handleClick=(evt) => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm
    })
  }





  render() {
    // console.log(this.props.hogwart);
  const {name, image1, house, id} = this.props.hogwart;
  const updateForm = this.state.showUpdateForm  ?  <UpdateForm id={id} updateCharacterHouse={this.props.updateCharacterHouse}/> : null
    return (
      <div className="class-container">
        <h2>Name:{name}</h2>
        <img className="index-image" src={image1} alt=""/>
        <h2 onClick={this.handleClick}>house:{house}</h2>
         {updateForm}
     </div>
)
  }
}

export default CharacterCard;
