import { MEMBERSHIP_DATA } from './actionTypes'
import axios from 'axios'
const baseURL = 'http://192.168.122.219/api'

export const getMembership = membership => {
    return dispatch => {
        axios.post(`${baseURL}/membership`, {
            email: membership.email
        },
            {
                headers: {
                    Authorization: 'Bearer ' +membership.token
                }
            })
            .then(res => {
                if (res.status === 200) {
                    
                    if (!res.data.result.error) {
                        let membership = res.data.result.membersip

                        dispatch(membershipLoaded({
                            name: membership.nm_name,
                            filiacao: membership.created_at,
                            cpf: membership.nm_cpf,
                            nascimento: membership.dt_birthday
                        }))
                    }

                }
            })
            .catch(err => console.log(err))
    }

}

export const membershipLoaded = membership => {
    return {
        type: MEMBERSHIP_DATA,
        payload: membership

    }

}