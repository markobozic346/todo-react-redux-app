const addList = (title) => {
    
    return{
        type: 'ADD_LIST',
        payload: {
            title,
        }
    }
}

const addItem = (description, id) => {
    
    return{
        type: 'ADD_ITEM',
        payload: {
            description,
            id
        }
    }
}

const updateTitle = () => {
    return{
        type: 'UPDATE_TITLE',
        payload: {
            id: 'something'
        }
    }
}

const updateItem = () => {
    return{
        type: 'UPDATE_ITEM',
        payload: {
            id: 'something'
        }
    }
}

const removeList = () => {
    return{
        type: 'REMOVE_LIST',
        payload: {
            id: 'something'
        }
    }
}

const removeItem = (itemID, listID) => {
    
    return{
        type: 'REMOVE_ITEM',
        payload: {
            itemID,
            listID,
        }

    }
}

export default {addList, addItem, removeItem}