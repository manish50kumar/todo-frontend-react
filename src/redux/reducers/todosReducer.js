import * as actionTypes from '../actions/type.js';


export const todosReducers = (state =[], action) => {
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]
            
        case actionTypes.GETALL_TODO:
            return action.payload
        
       
        case actionTypes.TOGGLE_TODO:
            
            return state.map(todo => (
               
                
                todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo
            ))
        
       
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo
            ))
        
        
        
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
        
        default:
            return state; 
    }
}