export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
            if(serializedState === null){
                // if no item in storage
                return undefined;
            }
            // string to object
            return JSON.parse(serializedState);
        }catch (error) {
            // if user browser is blocking localStorage
            return undefined;
    }
}

export const saveState = (state) => {
    try{
        // object to string and pass new state to local storage
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState);
    } catch{

    }


}