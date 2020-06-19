import React from 'react';


const initialState = {
    ctr: 0, results: []
};

const reducer = (state = initialState, action) => {
   
    if(action.type === "onIncrement") {
       return {
            ...state,
            ctr:state.ctr + 1
       }
    } else if(action.type === "onDecrement") {
       return {
            ...state,
           ctr:state.ctr - 1
       }
    } else if(action.type === "onButtonResult") {
        return {
            ...state,
            results: state.results.concat(state.ctr)
        }
    }
    return state;
    
}
export default reducer;