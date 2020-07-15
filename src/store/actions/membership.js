import { MEMBERSHIP_DATA } from './actionTypes'

export const getMembership = membership => {
    return dispatch => {}

}

export const membershipLoaded = membership => {
    return {
        type: MEMBERSHIP_DATA,
        payload: membership

    }

}