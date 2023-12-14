import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function DisplayTodo() {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch()
    // const deleteList = () =>{
    //     console.log('delete')
    //     dispatch(removeTodo(todo.id))
    // }

  return (
    <>
      {
        todos.map((todo) => (
            <div>
                <div key={todo.id}>{todo.text}</div>
                <button onClick={() => dispatch(removeTodo(todo.id))} >delete</button>
            </div>
            
        ))
      }
    </>
  )
}

export default DisplayTodo
