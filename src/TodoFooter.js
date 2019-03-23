import React from "react"
import { TodoCounter } from "./TodoCounter"
import { TodoFilters } from "./TodoFilters"

export class TodoFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <TodoCounter todosLeft={this.props.todos.filter(todo => todo.isDone === false).length}/>
        <TodoFilters />
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}