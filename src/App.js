import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  //To invoke before rendering the pages
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  handleChange(e){
    this.setState({searchFeild:e.target.value})
  }

  render(){
    const { monsters,searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        
        <SearchBox
          placeholder = "Search Monsters..!"
          handler = {this.handleChange}
        />

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
