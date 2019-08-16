import { GET, GETTING, SEND } from '../actions'

const initialState = {
    smurf: null,
    gotten: false,
    getting: false,
    sent: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case GETTING:
            return {
                ...state,
                getting: true,
                sent: false,
            }
        case GET:
            return {
                ...state,
                gotten: true,
                sent: false,
                smurf: action.payload
            }
        case SEND:
            return {
                ...state,
                sent: true
            }
        default:
            return state
    }

}