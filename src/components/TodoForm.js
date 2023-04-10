import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState('');

  return (
    <form className='TodoForm'>
        <input type='text' className='todo-list' placeholder='What task will you handle today?' onChange={(e) => console.log(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
 