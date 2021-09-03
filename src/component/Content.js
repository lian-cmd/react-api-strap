import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Content extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) =>
    //     this.setState({
    //       posts: json
    //     })
      
    //   );

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        this.setState({
        posts: result.data
      })
    })

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
                    <button className="btn btn-danger me-3">Hapus</button>
                    <button className="btn btn-warning">Edit</button>
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
