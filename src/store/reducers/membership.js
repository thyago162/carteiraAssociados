import { MEMBERSHIP_DATA } from '../actions/actionTypes'

const initialState = {
    nome: '',
    filiacao: '',
    cpf: '',
    nascimento: ''
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case MEMBERSHIP_DATA: 
            return {
                ...state,
                nome: state.nome,
                filiacao: state.filiacao,
                cpf: state.cpf,
                nascimento: state.nascimento
            }
        default:
            return state
    }

}

export default reducer