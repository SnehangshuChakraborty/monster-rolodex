import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  render(){
    const { monsters,searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <input
        type="search"
        placeholder = "Search Monsters..!"
        onChange = {e=> this.setState({searchFeild:e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
