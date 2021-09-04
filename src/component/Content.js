import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Content extends Component {
  state = {
    posts: [],
    formPost: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false
  };

  getPosApi = () => {
    //menampilkan
    axios
      .get(`http://localhost:3004/posts?_sort=id&_order=desc`)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
      });
  };

  postDataToApi = () => {
    axios.post("http://localhost:3004/posts/", this.state.formPost).then(
      (result) => {
        console.log(result);
        this.getPosApi();
        this.setState({ //ketika telah berhasil di post maka isi form akan dikosongkan kembali
          formPost: {
            userId: 1,
            id: 1,
            title: "",
            body: "",
          }
        })
      },
      (error) => {
        console.log(error);
      }
    );
  };

  putDataToApi = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formPost.id}`,this.state.formPost)
      .then((result) => {
      // console.log(result);
        this.getPosApi();
        this.setState({
          isUpdate: false,
          formPost: {
            userId: 1,
            id: 1,
            title: "",
            body: "",
          }
        })
        
    })
  }

  handlePost = (event) => {
    event.preventDefault();
    // console.log(this.state.formPost)
    if (this.state.isUpdate) {
      this.putDataToApi();
    } else {
      this.postDataToApi();
    }
  };

  handleHapus = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3004/posts/${id}`).then((result) => {
      this.getPosApi();
    });
  };

  handleChange = (event) => {
    // console.log(e.target.name)
    let formPostNew = { ...this.state.formPost }; //mencopy isi formPost
    // console.log(formPostNew[e.target.name]) //hasilnya title
    let timeStamp = new Date().getTime();
    // console.log(timeStamp)
    if (!this.state.isUpdate) { // update bernilai benar
      formPostNew["id"] = timeStamp;
    }
    formPostNew[event.target.name] = event.target.value;
    // ambil namenya seperti title, body dll dan masukkan nilainya yang diketik
    this.setState(
      {
        formPost: formPostNew,
      },
      () => {
        //  console.log(this.state.formPost);
      }
    );
  };

  handleEdit = (data) => {
    // console.log(data)
    this.setState({
      formPost: data,
      isUpdate:true
    })
  }

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
                  <input
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.formPost.title}
                    type="text"
                    className="form-control"
                    id="title"
                  />
                  <label htmlFor="body" className="form-label">
                    Body
                  </label>
                  <input
                    name="body"
                    onChange={this.handleChange}
                    value={this.state.formPost.body}
                    type="text"
                    className="form-control"
                    id="body"
                  />
                </div>
                <button
                  onClick={this.handlePost}
                  type="submit"
                  className="btn btn-primary"
                >
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
                  <button
                    onClick={() => this.handleEdit(post)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
