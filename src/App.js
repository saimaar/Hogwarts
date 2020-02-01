import React, { Component } from "react";
import "./App.css";
import CharacterContainer from './Containers/CharacterContainer.js'
import HouseContainer from './Containers/HouseContainer.js'
import SearchForm from './Components/SearchForm.jsx'
class App extends Component {

  state = {
    hogwarts: [],
    searchInput: ""
  }

  componentDidMount() {

    fetch(`http://localhost:4000/characters`)
    .then(r => r.json())
    .then((hogwarts) => {
      this.setState({
        hogwarts
      })
    })
  }

  updateCharacterHouse=(idFromChild, newHouse) => {
    let newHogwartArray = this.state.hogwarts.map(hogwart => {
        if (hogwart.id === idFromChild){
         let updatedObj = {...hogwart, house: newHouse}
         return updatedObj
        } else {
          return hogwart
        }
    })
    this.setState({
      hogwarts: newHogwartArray
    })

  }

  createNewCharacter = (newCharacterFromChild) => {
    let newid = this.state.hogwarts.length + 1
    let newCharacterFromChildObj = {...newCharacterFromChild, id: newid}
    let newArray = [...this.state.hogwarts, newCharacterFromChildObj]

    this.setState({
      hogwarts: newArray
    })
  }

  updateSearchTerm = (searchInput) => {
    this.setState({
      searchInput
    })
  }

  filterHogwarts = () => {
    if (this.state.searchInput !== ""){
    return this.state.hogwarts.filter(hogwart =>
      hogwart.house.includes(this.state.searchInput) || hogwart.name.includes(this.state.searchInput))
    } else {
      return this.state.hogwarts
    }
  }






  render() {
    // console.log(this.state.hogwarts);
    return (
      <div className="app">
        <h1>You Can Do This!</h1>
        <SearchForm searchInput={this.state.searchInput} updateSearchTerm={this.updateSearchTerm}/>
        <CharacterContainer hogwarts ={this.filterHogwarts()} updateCharacterHouse={this.updateCharacterHouse} createNewCharacter={this.createNewCharacter} />
        <HouseContainer hogwarts={this.filterHogwarts()} updateCharacterHouse={this.updateCharacterHouse} />
      </div>
    );
  }
}

export default App;
