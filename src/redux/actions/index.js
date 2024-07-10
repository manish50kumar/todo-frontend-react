
import axios from 'axios';
import { ADDNEW_TODO ,GETALL_TODO , TOGGLE_TODO , UPDATE_TODO , DELETE_TODO ,TOGGLE_TAB} from './type.js'; 

const API_URL = 'http://localhost:4005/task'; 

 const addNewTodo = (task)=>async(dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/add-task`, { task });
        console.log("Add data : ", res.data.newTask);
      
        dispatch({ type: ADDNEW_TODO, payload: res.data.newTask });
    } catch (error) {
        console.log("Error while calling addNewTodo API",error.message)
    }
}

export const getAllTodos = () =>async (dispatch) => {
    try {
        console.log("calling..");
          const res = await axios.get(`${API_URL}/get-all-task`);
          console.log("Data : ", res.data.allTask);
         
         dispatch({ type: GETALL_TODO, payload: res.data.allTask });
    } catch (error) {
        console.log("Error  while calling getAllTodos API",error.message)
    }
}

export const toggleTodo = (id) =>async (dispatch) => {
      try {
          const res = await axios.get(`${API_URL}/complete-task/${id}`);
          console.log("To Complete : ", res.data.updatedTaskFinal.id)
          dispatch({ type: TOGGLE_TODO, payload: res.data.updatedTaskFinal });
    } catch (error) {
        console.log("Error  while calling complete task toggle API",error.message)
    }
}

export const updateTodo = (id,task) =>async (dispatch) => {
      try {
          const res = await axios.put(`${API_URL}/update-task/${id}`,{ task });
         
          dispatch({ type: UPDATE_TODO, payload: res.data.updateTaskfinal });
    } catch (error) {
        console.log("Error  while calling updateTodo API",error.message)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
      try {
          const res = await axios.delete(`${API_URL}/delete-task/${id}`);
          console.log("Delete: ", res.data);
         dispatch({ type: DELETE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error  while calling deleteTodo API",error.message)
    } 
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({type: TOGGLE_TAB, selected : tab})
}

 export default addNewTodo;
//export default getAllTodos;