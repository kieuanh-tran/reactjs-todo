import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todoList, onDeleteTodo}) {
  return (
    <ul className="my-4">
        {todoList.map(todoItem =>
            <TodoItem key={todoItem.id} todoItem = {todoItem} onDeleteTodo = {onDeleteTodo} />
        )}
    </ul>  
  )
}
