import { useEffect } from 'react';


import { deleteTodo, getAllTodos } from '../redux/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';

import { ALL_TODOS,DONE_TODOS,ACTIVE_TODOS } from '../redux/actions/type.js';

//components
import Todo from './Todo.jsx'; 
import Tabs from './Tabs';


export const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    },[dispatch]) 
    
    
    
    const getTodos = () => {
        console.log("Todos : ", todos);
        if (currentTab === ALL_TODOS) {
            return todos;
        }
        else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.status);
        }
        else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.status);
        }
            
    }  

    
    const removeDoneTodos = () => {
        todos.forEach(({ status,id}) => {
            if (status) {
                dispatch(deleteTodo(id));
            }
        })
        
    }

    return (
       
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {
                    // todos.some(todo => todo.done) ? (
                    todos.some(todo => todo.status) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >                            
                            Remove Done Todos</button>
                    ) : null
                }
            </div>
            <ul>
               
                {
                    getTodos().map(todo => (
                        <Todo
                            key={todo.id}
                           todo={todo}
                        />
                    ))
                }
            </ul>  
        </article>
    )
}
export default Todos;