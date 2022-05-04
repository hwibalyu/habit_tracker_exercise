import React from "react";
import "./app.css";

import Habits from "./components/habits";
import NavBar from "./components/navbar";

class App extends React.PureComponent {
  state = {
    habits: [
      { id: 1, name: "Coding", count: 0 },
      { id: 2, name: "Studying", count: 0 },
      { id: 3, name: "Reading", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });

    this.setState({
      habits: habits,
    });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });

    this.setState({
      habits: habits,
    });
  };
  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);

    this.setState({ habits });
  };

  reset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      } else {
        return item;
      }
    });
    if (JSON.stringify(this.state.habits) === JSON.stringify(habits)) {
      return;
    }
    this.setState({ habits });
  };

  addHabit = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <NavBar count={this.state.habits.filter((habit) => habit.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.addHabit}
        />
        <button className="resetbtn" onClick={this.reset}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
