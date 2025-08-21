import React, { Component } from "react";

class Notification extends Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Notification Component</h2>
      </div>
    );
  }
}

export default Notification;
