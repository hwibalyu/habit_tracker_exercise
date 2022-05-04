import React, { Component } from "react";

class Sample extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) => <li key={numbers}>{numbers}</li>);

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Sample;
