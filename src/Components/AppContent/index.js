import React from 'react';
import './appContent.css';
// import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';

export default function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b)=> new Date(a.time) - new Date(b.time));
  return (
    <div className='appContent'>
      {sortedTodoList && sortedTodoList.length > 0
      ? sortedTodoList.map((item)=><ul key={item.id}>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.time}</li>
      </ul>)
      
      : <div>no todos!</div>
      }
    </div>
  )
}
