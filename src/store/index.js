import { createStore } from "redux";

const CounterReducer=(state={counter:0},action)=>{
    if(action.type==='increment')
    {
        return {counter:state.counter+2}
    }
    else if(action.type==='decrement'){
               return {counter:state.counter-}
    }
    return state
}
const store=createStore(CounterReducer);
export default store;