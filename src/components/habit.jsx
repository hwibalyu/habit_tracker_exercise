import React, { PureComponent } from "react";

class Habit extends PureComponent {
  render() {
    const { name, count } = this.props.habit;
    const onIncrement = this.props.onIncrement;
    const onDecrement = this.props.onDecrement;
    const onDelete = this.props.onDelete;

    return (
      <>
        <li className="habit">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={(e) => onIncrement(this.props.habit)}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={(e) => onDecrement(this.props.habit)}
          >
            <i className="fa-solid fa-square-minus"></i>
          </button>
          <button className="habit-button habit-delete" onClick={(e) => onDelete(this.props.habit)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
