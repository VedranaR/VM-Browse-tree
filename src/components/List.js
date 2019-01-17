import React, { Component } from "react";

class List extends Component {
  render() {

    const showOnClick = () => {

    }
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
              className="fas fa-sort-down"
              style={{ cursor: "pointer", float: "right" }}
              onClick={this.showOnClick}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
