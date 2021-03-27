const removeReducer = (state = 1, action) => {
    switch(action.type){
        case 'REMOVE_LIST':
            return state + 1;
        case 'REMOVE_ITEM':
            return state +2;
        default:
            return state;
    }
}
export default removeReducer