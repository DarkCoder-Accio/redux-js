import store from "./redux/store.js"; 
import {increment, decrement, reset} from "./redux/actions/counterActions.js";

// store => getState()

console.log("initial value", store.getState())

// call iccrease action:

// store => dispatch()

store.dispatch(increment()) // 1-2
store.dispatch(increment(100))
store.dispatch(increment(300))

console.log("setp 1", store.getState())

store.dispatch(decrement())

console.log("setp 2", store.getState())

store.dispatch(reset())

console.log("setp 3", store.getState())

