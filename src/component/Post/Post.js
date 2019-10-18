import React, { Component } from 'react'

import PostItem from './PostItem';
 
class Post extends Component {
  render() {
    return this.props.post.map((post) => (
      <PostItem key={post.id} title={post.title} desc={post.body} />
  ));
  }
}

export default Post

