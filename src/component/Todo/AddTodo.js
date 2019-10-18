import React, { Component, Fragment } from "react";


class AddTodo extends Component {
  state = {
    title: ""
  };

  handleOnChange = (e) => {
      this.setState({
        title : e.target.value
      })
  }
  
  handleSubmit = () => {
    if (this.state.title === '') return
    this.props.addTodo(this.state.title);
    this.setState({ 
        title: '' 
    });
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">TodoList</p>
        <div className="form-add-post">
          <label htmlFor="title">Add Todo</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="add Todo"
            onChange={this.handleOnChange}
          />
          <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
        </div>
      </Fragment>
    );
  }
}

export default AddTodo;
