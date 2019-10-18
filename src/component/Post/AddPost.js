import React, { Component, Fragment } from "react";

class AddPost extends Component {
    state = {
        formPost: {
            id: 1,
            title: "",
            body: ""
        } 
    }

    handleFormChange = (event) => {
        let formPostNew = {...this.state.formPost};
        formPostNew[event.target.name] = event.target.value
        this.setState({
          formPost: formPostNew
        })
    }

    handleSubmit = (e) => {
        if (this.state.formPost.title === '' || this.state.formPost.body === '') return
        this.props.addPost(this.state.formPost);
        this.setState({ 
            formPost: {
                id: 1,
                title: "",
                body: ""
            } 
        });
    }
  render() {
    return (
      <Fragment>
        <p className="section-title">Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            value={this.state.formPost.title}
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Content</label>
          <textarea
            name="body"
            id="body"
            cols="30 "
            rows="10"
            placeholder="add content"
            value={this.state.formPost.body}
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
      </Fragment>
    );
  }
}

export default AddPost;
