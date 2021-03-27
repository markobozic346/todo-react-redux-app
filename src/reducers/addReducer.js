
import data from '../data/data'


const addReducer = (state = data, action) => {
    
    switch(action.type){
        case 'ADD_LIST':
            return [
                ...state,
                {
                    id: 9,
                    title: action.payload.title,
                    items: []
                }
            ]
            
        case 'ADD_ITEM':
            return [
                
            ];
        default:
            return state;
    }
}
export default addReducer