import { createStore } from "redux"; 
import counterReducer from "./reducer/counterReducer.js"; 



const store = createStore(counterReducer)

export default store;


// dispatch(increment(100))
// dispatch({type: INCREMENT, value: 100}) 
//  counterReducer(state, {type: INCREMENT, value: 100})


// 1st time only:  x = counterReducer()
// x is stored inside store = 0


// dispatch(increment()) 
// dispatch({type: INCREMENT}) - 2 
// x = counterReducer(state, {type: INCREMENT} ) = 2 
// this x = 2 is stored inside store