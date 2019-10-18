import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import axios from "axios";

import AddPost from "./AddPost";
import Post from './Post';

class BlogPost extends Component {
  state = {
    posts: []
  };

  getPostAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(result => {
      this.setState({
        posts: result.data
      });
    });
  };

  addPost = (formPost) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title : formPost.title,
        body: formPost.body
      })
      .then(res => {
        this.setState({
          posts: [...this.state.posts, res.data],
        });
      });
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <AddPost addPost={this.addPost} />
        <Post post={this.state.posts}/>
      </Fragment>
    );
  }
}

export default BlogPost;
