const initState = {
    counter: 30,
    order:"id",
    URL:"http://fs1.co.il/bus/phones/"
};
// URL:"http://localhost/doria/phones"

function RootRed(state = initState, action){
    if(action.type == "changeOrder"){
        return {...state , order:action.order}
    }
    return state;
}

export default RootRed;
