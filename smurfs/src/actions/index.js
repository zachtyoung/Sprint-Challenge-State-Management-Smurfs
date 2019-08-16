import axios from 'axios'

export const GET = 'GET',
    GETTING = 'GETTING',
    SEND = 'SEND'

export const getSmurfs = () => dispatch => {
    dispatch({ type: GETTING })
    axios.get('http://localhost:3333/smurfs')
        .then(rez =>  dispatch({ type: GET, payload: rez.data }))
        .catch(err => console.log('FAILED', err))
}

export const sendSmurfs = creds => {
    return dispatch => {
        axios
            .post('http://localhost:3333/smurfs', creds)
            .then(rez => dispatch({ type: SEND, payload: rez.data }))
            .catch(err => console.log(err))
            
    }
}