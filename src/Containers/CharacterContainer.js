import React from "react";
import CharacterCard from "../Components/CharacterCard.js"
import CreateForm from "../Components/CreateForm.jsx"
export default class CharacterContainer extends React.Component {
  render() {
    let hogwartsObj = this.props.hogwarts.map(hogwart => <CharacterCard key={hogwart.id} hogwart={hogwart} updateCharacterHouse= {this.props.updateCharacterHouse}/>)
    return (
      <div className="list">
        <CreateForm createNewCharacter={this.props.createNewCharacter}/>
        {hogwartsObj}

      </div>
    )
  }
}
