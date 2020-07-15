import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED,
    MEMBERSHIP_DATA
} from '../actions/actionTypes'

const initialState = {
    email: null,
    password: null,
    token: null,
    isLoading: false,
    nome: null,
    cpf: null,
    filiacao: null,
    nascimento: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.token,
                nome: action.payload.nome,
                cpf: action.payload.cpf,
                filiacao: action.payload.filiacao,
                nascimento: action.payload.nascimento
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                email: null,
                password: null,
                token: null,
                nome: null,
                cpf: null,
                filiacao: null,
                nascimento: null
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false
            }

            
        default:
            return state
    }
}

export default reducer