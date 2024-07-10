import { useState } from "react";
import { useDispatch } from "react-redux";
import addNewTodo  from "../redux/actions/index.js";

const TodoForm = () => {
    const [text, setText] = useState(""); 
    
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new todo...."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <button className="button add-todo-btn">ADD</button>
        </form>
    )
}

export default TodoForm;