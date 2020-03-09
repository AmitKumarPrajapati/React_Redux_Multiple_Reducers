const initialState = {
    b : 1,
}


const reducerB = (state = initialState, action) => {
    if(action.type === "UPDATE_B"){
        return {
            ...state,
            b: state.b + action.value
        }
    }
    return state
}


export default reducerB;