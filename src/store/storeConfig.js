import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import membershipReducer from './reducers/membership'

const reducers = combineReducers({
    user: userReducer,
    membership: membershipReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
