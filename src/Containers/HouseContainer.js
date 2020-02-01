import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  render() {
    let hogwartsObj = this.props.hogwarts.map(hogwart => <House key={hogwart.id} hogwart={hogwart} updateCharacterHouse={this.props.updateCharacterHouse} />)
    return <ul className="houseContainer">
      {hogwartsObj}
    </ul>;
  }
}
