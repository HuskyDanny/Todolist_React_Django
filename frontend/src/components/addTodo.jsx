import React, { Component } from "react";

class AddTodo extends Component {
  state = { title: "" };
  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="form-group" style={{ width: "80%" }}>
        <form onSubmit={this.onSubmit}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter your todos here..."
            value={this.state.title}
            onChange={this.onChange}
          />

          <button
            type="submit"
            className="btn btn-primary btn-success"
            style={{ height: "100%", width: "100%" }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
