import React, { Component } from "react";

class TodoFrom extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
  }

  handleInput(e) {
    console.log(e.target.value, e.target.name);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="reposonsable"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Responsable"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select name="priority" id="priority" 
            onChange={this.handleInput}
            className="form-control">
              <option >low</option>
              <option >medium</option>
              <option >high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoFrom;
