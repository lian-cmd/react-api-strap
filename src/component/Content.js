import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Content extends Component {
  state = {
    posts: [],
    formPost: {
      userId: 1,
      id: 1,
      title: '',
      body:''
    }
  };

  getPosApi = () => {
  axios.get("http://localhost:3004/posts").then((result) => {
    this.setState({
      posts: result.data,
    });
  });
}

  handleHapus = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3004/posts/${id}`)
      .then((result) => {
      this.getPosApi()
    })
  };
  
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) =>
    //     this.setState({
    //       posts: json
    //     })

    //   );

    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // axios.get("http://localhost:3004/posts").then((result) => {
    //   this.setState({
    //     posts: result.data,
    //   });
    // });
    this.getPosApi();
  }

  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4 card pb-2">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input name="title" type="text" className="form-control" id="title" />
                  <label htmlFor="body" className="form-label">
                    Body
                  </label>
                  <input name="body" type="text" className="form-control" id="body" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>

        {this.state.posts.map((post) => {
          return (
            <div key={post.id} className="container mt-5 ">
              <div className="card" style={{ width: 500 }}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <button
                    onClick={() => this.handleHapus(post.id)}
                    className="btn btn-danger me-3"
                  >
                    Hapus
                  </button>
                  <button className="btn btn-warning">Edit</button>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
