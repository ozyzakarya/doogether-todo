import React, { Component, Fragment } from "react";
import "./TodoList.css";

import AddTodo from "./AddTodo";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = (title) => {
    const newTodo = {
      id: Math.random(),
      title: title,
      complated: false
    };
    const updateTodos = [...this.state.todos, newTodo];
    console.log(updateTodos)
    this.setState({
      todos: updateTodos,
      title: ""
    });
  };

  handleRemove = (id) => {
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id;
      });
      this.setState({
        todos: todos
      });
  }

  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
    });
}

  render() {
    return (
      <Fragment>
        <AddTodo addTodo={this.addTodo} />
        <Todo todo={this.state.todos}  remove={this.handleRemove} completed={this.handleComplete}/>
      </Fragment>
    );
  }
}

export default TodoList;
