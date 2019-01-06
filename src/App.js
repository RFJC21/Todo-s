import React, { Component } from "react";

import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Learn React" },
      { id: 2, content: "Play Call of Duty" }
    ]
  };

  //Return true to keep the element, false otherwise
  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  //add todo to the list(state)
  //copy the old state and create a new array
  addToDo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
