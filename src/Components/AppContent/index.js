import React from 'react';
import './appContent.css';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';

export default function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b)=> new Date(a.time) - new Date(b.time));
  return (
    <div className='app-content-light'>
      {sortedTodoList && sortedTodoList.length > 0
      ? sortedTodoList.map((item)=><TodoItem key={item.id} item={item}/>)
      : <div>no todos!</div>
      }
    </div>
  )
}
