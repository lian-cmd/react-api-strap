import React, { Component, Fragment } from "react";

export default class Content extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          posts: json
        })
      
      );
  }

  render() {
    return (
      <Fragment>
        {
          this.state.posts.map((post,index) => {
            return (
              <div key={index} className="container mt-5 ">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <a href="#" className="btn btn-primary">
                      more..
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </Fragment>
      
    )
  }
}
