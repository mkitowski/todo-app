import React from "react"

export class TodoItem extends React.Component {
  componentWillReceiveProps() {
    // console.log('Heyyy, new props: ', this.props)
  }

  componentWillUpdate(nextProps) {
    console.log('componentWillUpdate', this.props)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props)
  }

  componentWillUnmount() {
    console.log('I\'m dead!')
  }

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