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
      return <div className="card">{todo.title}</div>;
    });

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">Menu 1</div>
        </nav>
        { todos }
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;
