import React from "react"

export class TodoItem extends React.Component {
  render() {
    let completedClassName = ""
    if (this.props.isDone) {
      completedClassName = "completed"
    }

    return <li className={completedClassName}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={this.props.isDone} />
        <label>{this.props.title}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </li>
  }
}