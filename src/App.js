import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

import {SearchBox} from './components/searchbox/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this); 
  }

  componentDidMount()  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  //Function that handles the search field
  handleChange= e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state; //setting the state values to constants
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Dex</h1>
        <SearchBox
          placeholder='search monsters'
            handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
