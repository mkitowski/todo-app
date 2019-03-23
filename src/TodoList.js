import React from 'react'
import { TodoItem } from './TodoItem'

// mapping number -> number * 2
// [1, 2, 3] -> [2, 4, 6]
// [1, 2, 3].map(n => n * 2) // [2, 4, 6]

// mapping table -> TodoItem
// [{ title: 'New Item', id: 1, isDone: true }, ...] ->
// [<TodoItem title={'New Item'} isDone={true} />, ...]

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