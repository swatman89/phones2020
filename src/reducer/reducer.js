const initState = {
    counter: 30,
    order:"id"
};

function RootRed(state = initState, action){
    if(action.type == "changeOrder"){
        return {...state , order:action.order}
    }
    return state;
}

export default RootRed;
