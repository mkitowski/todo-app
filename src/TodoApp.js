import React from 'react'
import "./TodoApp.css"
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { Footer } from './Footer'
import { TodoFooter } from './TodoFooter'
import { TodoToggleAll } from './TodoToggleAll'

export class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [
				{
					title: 'Learn state',
					isDone: false,
					id: 0
				}
			]
		}
	}

	componentDidMount () {
		this.interval = setInterval(() => {
			console.log('hello!')
			const newTodo = {
				title: 'nowy task',
				isDone: false,
				id: 1
			}
			const newState = {
				todos: [...this.state.todos, newTodo]
			}
			this.setState(newState)
		}, 2000)	
	}

	componentWillUnmount () {
		clearInterval(this.interval)
	}

  render() {
		return <div>
			<section className="todoapp">
				<TodoForm />
				<section className="main">
					<TodoToggleAll />
					<TodoList todos={this.state.todos}/>
				</section>
				<TodoFooter todos={this.state.todos}/>
			</section>
			<Footer />
		</div>
	}
}