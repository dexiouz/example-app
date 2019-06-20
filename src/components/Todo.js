import React, { Component } from "react";
import TodoItems from "./TodoItems";
import Header from "./Header";
import { link } from "fs";
class Todo extends Component {
  render() {
    const todoItems = ["cook", "eat", "sleep", "relax", "pray"];
    return (
      <div>
        <Header title="MY TODO TITLE" />
        <h1> Welcome to my todo App </h1>
        <TodoItems />
        <ul>
          {todoItems.map(item => (
            <TodoItems individulItem={item} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
