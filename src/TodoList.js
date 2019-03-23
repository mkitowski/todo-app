import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  return <ul className="todo-list">
    {props.todos.map((todoItem) => {
      return <TodoItem
        title={todoItem.title}
        isDone={todoItem.isDone}
      />
    })}
  </ul>
}