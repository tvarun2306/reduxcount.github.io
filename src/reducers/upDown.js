const initialState=0;

function reduce(state=initialState,action){
    switch(action.type){
        case "Increament":return state+1;
        case "Decreament": return state-1;
        default: return state;
    }
}

export default reduce;