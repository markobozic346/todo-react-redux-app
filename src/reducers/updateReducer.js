const updateReducer = (state = 1, action) => {
    switch(action.type){
        case 'UPDATE_TITLE':
            return state + 1;
        case 'UPDATE_ITEM':
            return state +2;
        default:
                return state;
    }
}
export default updateReducer