import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div
        className="card card-body mb-3"
        onClick={}
        style={}
      >
        <h4>{}</h4>
        <ul className="list-group">
          <li className="list-group-item">: {}</li>
          <li className="list-group-item">: {}</li>
          <li className="list-group-item">
            : {}
            <i
              className="fas fa-user-edit"
              style={{ cursor: "pointer", float: "right" }}
              onClick={}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
