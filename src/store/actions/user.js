import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT, 
    LOADING_USER, 
    USER_LOADED, 
    MEMBERSHIP_DATA} 
from './actionTypes'
import { setMessage } from './message'
import axios from 'axios'

const baseURL = 'https://aspolpb.com.br/api'

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${baseURL}/login`, {
            email: user.email,
            password: user.password
        })
            .then(res => {
                if (res.status === 200) {
                    if (res.data.response.token) {
                        user.password = null
                        user.token = res.data.response.token
    
                        axios.post(`${baseURL}/membership`,{
                            email: user.email
                        },
                        {
                            headers: {
                                Authorization: 'Bearer '+user.token
                            }
                        })
                        .then(res => {
                            if (res.status === 200) {
                                if (res.data.result.membersip) {
                                    user.nome = res.data.result.membersip.nm_name
                                    user.cpf = res.data.result.membersip.nm_cpf
                                    user.filiacao = res.data.result.membersip.created_at
                                    user.nascimento = res.data.result.membersip.dt_birthday

                                    dispatch(userLogged(user))
                                    dispatch(userLoaded())
                                }
                                else {
                                    dispatch(setMessage({
                                        title: 'Erro!',
                                        text: 'Não é possível realizar login. O e-mail não pertence a nenhum associado'
                                    }))
                                }
                            }
                            else {
                                dispatch(setMessage({
                                    title: 'Erro!',
                                    text: 'Falha na comunicação com o servidor, tente novamente mais tarde'
                                }))
                            }
                        })
                       
                    }else {
                        dispatch(setMessage({
                            title: 'Erro!',
                            text: 'Email ou senha inválidos'
                        }))
                    }
                   
                }else {
                    dispatch(setMessage({
                        title: 'Erro!',
                        text: 'Falha na comunicação com o servidor, tente novamente mais tarde'
                    }))
                }
                
            })
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro!',
                    text: err
                }))
            })


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