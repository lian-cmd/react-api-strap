import axios from 'axios';
import React, { Component } from 'react'

export default class Detail extends Component {
    state = {
        post: {
            title: "",
            body:""
        }
    }
  componentDidMount() {
    // console.log(this.props.match.params.id);
      const id = this.props.match.params.id;
      axios.get(`http://localhost:3004/posts/${id}`).then((result) => {
          console.log(result)
          const post = result.data;
          this.setState({
              post: {
                  title: post.title,
                 body: post.body 
              }
          })
      })
  }
  render() {
      return (
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                    <p className="mt-5">Ini halaman detail</p>
                    <h5>Title : {this.state.post.title}</h5>
                    <p>body : {this.state.post.body}</p>
                  </div>
              </div>
        </div>
      );
  }
}
