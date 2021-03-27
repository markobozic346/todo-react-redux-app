const addList = (title) => {
    
    return{
        type: 'ADD_LIST',
        payload: {
            title: title,
        }
    }
}

const addItem = () => {
    return{
        type: 'ADD_ITEM',
        payload: {
            description: 'something'
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

const removeItem = () => {
    return{
        type: 'REMOVE_ITEM',
        payload: {
            id: 'something'
        }

    }
}

export default {addList, addItem}