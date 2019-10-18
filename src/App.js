import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

import BlogPost from './component/Post/BlogPost';
import Todolist from './component/Todo/TodoList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="navigation">
            <Link to="/">Todo List</Link>
            <Link to="/blogpost">Blog Post</Link>
          </div>
          <Route path="/" exact component={Todolist} />
          <Route path="/blogpost" component={BlogPost} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
