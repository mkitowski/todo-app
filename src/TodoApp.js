import React from 'react'
import "./TodoApp.css"
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { Footer } from './Footer'
import { TodoFooter } from './TodoFooter'
import { TodoToggleAll } from './TodoToggleAll'

export function TodoApp(props) {
  return <div>
    <section className="todoapp">
			<TodoForm />
			<section className="main">
        <TodoToggleAll />
				<TodoList todos={props.todoItems}/>
			</section>
			<TodoFooter todos={props.todoItems}/>
		</section>
		<Footer />
  </div>
}