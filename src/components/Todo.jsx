import { useEffect, useState } from "react";

import { toggleTodo , updateTodo , deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import {getAllTodos} from "../redux/actions/index"

const Todo = ({ todo }) => { 
      
    const [editing, setEditing] = useState(false);
    // const [text,setText] = useState(todo?.data)
    const [text,setText] = useState(todo?.task)

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);
        // dispatch(updateTodo(todo._id,text))
        console.log("ID : ", todo.id);
        dispatch(updateTodo(todo.id,text))
    }

    useEffect(() => {
        dispatch(getAllTodos());
    },[dispatch])

   

    return (
        <li
            className="task"
           
            style={{
                textDecoration: todo.status ? 'line-through' : '',
                color: todo.status ? "#bdc3c7":'#34495e'
            }}
        >
           
            <button
                onClick={() => {
                    console.log(todo.id)
                    dispatch(toggleTodo(todo.id))
            }}
            >c {todo.id}</button>
            <span style={{ display: editing ? 'none' : '' }}>{todo?.id} : </span>
            <span style={{ display: editing ? 'none' : '' }}>{todo?.task}</span>

            
            <form
                style={{display:editing ? 'inline' : 'none'}}
                onSubmit={onFormSubmit}
                className="form"
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e)=> setText(e.target.value)}
                />
                <button className="button update-todo-btn">Update</button>
            </form>

           
            <span className="icon delete" onClick={()=> dispatch(deleteTodo(todo.id))}>
                <i className="fas fa-trash"/>
            </span>

            <span className="icon" onClick={()=> setEditing(prevState=>!prevState)}>
                <i className="fas fa-pen"/> 
            </span>
       </li>
    )
}

export default Todo;
    
