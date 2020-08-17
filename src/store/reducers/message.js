import { SET_MESSAGE } from '../actions/actionTypes'

const iniitalState = {
    title: '',
    text: ''
}
const reducer = (state = iniitalState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text
            }
        default:
            return state
    }
}
export default reducer