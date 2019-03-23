import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoApp } from './TodoApp';
import * as serviceWorker from './serviceWorker';
import { data } from './data'

// const post = {
//   title: 'Nowy artykul'
// }

// ReactDOM.render(<div>
//   <h1>{post.title}</h1>
// </div>)

ReactDOM.render(<TodoApp todoItems={data} />, document.getElementById('root'));

// setTimeout(() => {
//   ReactDOM.render(<h1>hello</h1>, document.getElementById('root'))
// }, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
