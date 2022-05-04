import React, { Component } from "react";
import Habit from "./habit";
import AddForm from "./addform";

class Habits extends Component {
  render() {
    const habits = this.props.habits;
    const handleIncrement = this.props.onIncrement;
    const handleDecrement = this.props.onDecrement;
    const handleDelete = this.props.onDelete;
    const handleAdd = this.props.onAdd;

    return (
      <>
        <AddForm onAdd={handleAdd} />
        <ul>
          {habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default Habits;
