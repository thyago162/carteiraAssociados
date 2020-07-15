import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    LOADING_USER, 
    USER_LOADED } 
from './actionTypes'
import axios from 'axios'

const baseURL = 'http://192.168.122.219/api'

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${baseURL}/login`, {
            email: user.email,
            password: user.password
        })
            .then(res => {
                if (res.data.response.token) {
                    user.password = null
                    user.token = res.data.response.token
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                }
            })
            .catch(err => console.log(err))


    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }

}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}