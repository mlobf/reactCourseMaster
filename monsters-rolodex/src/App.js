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
      string: "Hello Marcos Leme",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button
            onClick={() => this.setState({ string: "Hello Borba Filho" })}
          >
            Change the text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
