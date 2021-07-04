// The imports goes here.
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Just a functions that returns a html.
//
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends Component {
  constructor() {
    // The super calls the constructor method at Component.
    //  now is possible use 'this.'
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asci1",
        },
        {
          name: "Dracula",
          id: "asci2",
        },
        {
          name: "Zombie",
          id: "asci3",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {
          //map returns the return of the function we pass into it
          // iterated over every elements in this array.
          this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
