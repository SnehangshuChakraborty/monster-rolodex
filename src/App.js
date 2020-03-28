import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Ghatotkach',
          id: 'm1'
        },
        {
          name: 'Mahishashur',
          id: 'm2'
        },
        {
          name: 'Hiranyakashyap',
          id: 'm3'
        }
      ]
    };
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(
          monster => (<h1 key = {monster.id}>{monster.name}</h1>)
          )
        }
      </div>
    );
  }
}

export default App;
