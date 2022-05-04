import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="navbar">
            <i className="icon fa-solid fa-leaf"></i>
            <span>Habit Tracker</span>
            <span className="habit-count">{this.props.count}</span>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
