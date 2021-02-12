import React, { Component } from "react";
import "./style.css";

import { todos } from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col md-4">
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsable}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">Menu 1</div>
        </nav>
        <div className="container">
          <div className="row mt-4">{todos}</div>
        </div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;
