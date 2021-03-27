import {combineReducers} from 'redux'
import addReducer from './addReducer'
import removeReducer from './removeReducer'
import updateReducer from './updateReducer'

const allReducers = combineReducers({
    addReducer,
    removeReducer,
    updateReducer
})

export default allReducers