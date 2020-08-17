import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import membershipReducer from './reducers/membership'
import messageReducer from './reducers/message'

const reducers = combineReducers({
    user: userReducer,
    membership: membershipReducer,
    message: messageReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
