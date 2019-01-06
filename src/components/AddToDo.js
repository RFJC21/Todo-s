import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    content: ""
  };

  changeHandler = event => {
    this.setState({ content: event.target.value });
  };

  //preventDefault when refreshing
  //fires the addToDo function
  //in the end sets the state to empty
  submitHandler = event => {
    event.preventDefault();
    this.props.addToDo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Add new to do:</label>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;
