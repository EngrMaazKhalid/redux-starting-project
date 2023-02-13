// import {configureStore} from '@reduxjs/toolkit'

import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'
// const redux = require('redux');
const initialCounterState = { counter: 0, showCounter: true }
const counterSlice =  createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        Increment(state) { 
            state.counter++;
         },
        decrement(state) {
            state.counter--;
         },
        IncreaseBy(state, action) {
            state.counter = state.counter + action.payload         },//payload is a default in reduxtoolkit action
        toggle(state){
            state.showCounter = !state.showCounter;
         }
    }
})
const initialAuthState = { 
    isAuthenticated: false
}
const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers :{
        login(state){
            state.isAuthenticated= true;
        },
        logout(state){
            state.isAuthenticated= false;
        }

    }
})
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'Increment') {

//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {

//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'IncreaseBy') {

//         return {
//             counter: state.counter + action.Amount,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }

// const store= configureStore(counterReducer);
// const store = createStore(counterReducer);
// const store = createStore(counterSlice); we may use slice like this but to merge multiple slices we have to use configure store
// const store = configureStore({
//     reducer: { counter: counterSlice.reducer,  } // may merge multiple reducers like this
// })
const store = configureStore({
    reducer: {
        counter :counterSlice.reducer,
        auth : AuthSlice.reducer
    }
});



// // const counterSubscriber =()=> {
// //    const latestState = store.getState()
// //     console.log(latestState)
// // }
// // store.subscribe(counterSubscriber)
// // store.dispatch( {type:'increment'})
// // store.dispatch( {type:'decrement'})

export const counterAction = counterSlice.actions;
export const AuthAction = AuthSlice.actions;
export default store;