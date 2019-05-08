import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
class App extends Component {
  state = {
    maxid: 0,
    todos: []
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/todolist/")
      .then(res => this.setState({ todos: res.data, maxid: res.data.length }))
      .catch(err => console.error(err));
  }

  handleAddTodo = body => {
    const todo = { body: body, checked: false };
    axios
      .post("http://127.0.0.1:8000/todolist/", todo)
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
      .catch(err => console.error(err));
  };

  handleDeleteTodo = todo => {
    axios
      .delete(`http://127.0.0.1:8000/todolist/${todo.id}/`)
      .catch(err => console.error(err));
    this.setState({
      todos: [...this.state.todos].filter(todo_ => todo_.id !== todo.id)
    });
  };

  handleMarkTodo = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index].checked = !todos[index].checked;

    this.setState({ todos: todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Header handleAddTodo={this.handleAddTodo} />
                <Content
                  todos={todos}
                  handleMarkTodo={this.handleMarkTodo}
                  handleDeleteTodo={this.handleDeleteTodo}
                />
              </React.Fragment>
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
