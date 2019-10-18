import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { data, remove, completed } = this.props;
    const decor = this.props.data.completed ? 'line-through' : 'none'
    return (
      <div className="post">
        <div className="content">
          <p style={{textDecoration: decor}}>{data.title}</p>
          <button className="remove" onClick={() => remove(data.id)}>
            Remove
          </button>
          <button className="marktodo" onClick={() => completed(data.id)} checked={ completed ? 'checked': '' }>{' '}
            Cheklis
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
