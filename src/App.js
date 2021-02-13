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
              <span className="badge rounded-pill bg-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsable}</mark>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge rounded-pill bg-light text-dark ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">{todos}</div>
        </div>
      </div>
    );
  }
}

export default App;
