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

  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="text"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="text"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="text"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="text"
              placeholder="Title"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            save
          </button>
        </form>
      </div>
    );
  }
}
