function bugsReducer(currentState = [], action){
    if (action.type === 'BUGS_LOAD')
        return action.payload;
    if (action.type === 'BUGS_ADD_NEW')
        return [...currentState, action.payload];
    if (action.type === "BUGS_REPLACE")
        return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
    if (action.type === 'BUGS_REMOVE')
        return currentState.filter(bug => bug.id !== action.payload.id);        
    return currentState;
}

export default bugsReducer;