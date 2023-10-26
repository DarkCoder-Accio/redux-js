
import { INCREMENT, DECREMENT,RESET } from '../actions/actionTypes.js';

const  initialState = 0


const counterReducer = (state=initialState, action)=>{

    switch(action.type){
      case INCREMENT:  return state + action.value
      case DECREMENT:  return state-1
      case RESET:  return initialState
      default: return state
    }
    
}

export default counterReducer


// counterReducer(state, {type: INCREMENT, value: 100})

// counterReducer()
// counterReducer(1, {type: INCREMENT}) 
// counterReducer(10, {type: DECREMENT})
// counterReducer(10, {type: RESET})