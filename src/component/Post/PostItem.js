import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div className="post">
        <div className="img-thumb">
          <img src="http://placeimg.com/200/100/tech" alt="dummy" />
        </div>
        <div className="content">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    );
  }
}

export default PostItem;
