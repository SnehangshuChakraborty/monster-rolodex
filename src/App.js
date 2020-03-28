import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  render(){
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <CardList>
        {
          this.state.monsters.map(
          monster => (<h1 key = {monster.id}>{monster.name}</h1>)
          )
        }
        </CardList>
      </div>
    );
  }
}

export default App;
