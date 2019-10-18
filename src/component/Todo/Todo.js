import React, { Component } from "react";
import TodoItem from './TodoItem';

class Todo extends Component {
  render() {
    return this.props.todo.map((todo) => (
      <TodoItem key={todo.id} data={todo} remove={this.props.remove} completed={this.props.completed}/>
  ));
  }
}

export default Todo;
