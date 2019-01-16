import { createStore } from 'redux';
export const ADD = 'ADD';
export const Delete = 'DELETE'
//Actions
export const addMessage = (message) => {
    return{
        type: ADD,
        message: message
    }
}

//Reducer

export const meesageReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD':
        return [...state, action.message]
        
        default:
        return state
    }
}



//Store

export const store = createStore(meesageReducer)
