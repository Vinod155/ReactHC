import React ,{useState}from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from'../feature/todo/todoSlice'

function Todos(){
   const todos=useSelector((state)=>state.todos)
   const[todoMsg,setTodoMsg]=useState()
   const dispatch=useDispatch()
    return(
        <div>
            Todos
            {todos.map((todo)=>(
                <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}>

                     <div className='text-white'><input type="text" className='text-black' value={todo.text}
                      onChange={(e)=>todo.text=e.target.value}
                     /></div>
                     { <button className='text-white'
                     onClick={()=>dispatch(updateTodo(todo.id))}>Edit</button>}
                    <button 
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                     onClick={()=>dispatch(removeTodo(todo.id))}>X</button>

                </li>
                
            ))}
        </div>
    )
}

export default Todos