
import * as actionTypes from '../actions/type.js'

export const tabReducer = (state = actionTypes.ALL_TODOS , action) =>{
    switch(action.type){
        case actionTypes.TOGGLE_TAB:
            return action.selected;
        
        default:
            return state;
    } 
}