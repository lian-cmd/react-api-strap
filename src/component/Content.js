import React from "react";

export default function Content() {
  return (
    <div className="container mt-5 ">
      <div className="card">
        <img style={{ width:200}}
          src="https://placeimg.com/640/480/tech"
          className="card-img-top"
          alt="image"
        />
        <div className="card-body">
          <h5 className="card-title">Laptop Lenovo Gen-6</h5>
          <p className="card-text">
            Tersedia: 10 
          </p>
          <a href="#" className="btn btn-primary">
            Beli
          </a>
        </div>
      </div>
    </div>
  );
}
