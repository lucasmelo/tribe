import { SubmissionError } from 'redux-form'
import { Creators } from '../../redux/ducks/register'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Submit = (values, dispatch) => {
    return sleep(1000) // simulate server latency
        .then(() => {
            if (!['a'].includes(values.email)) {
                throw new SubmissionError({ email: 'Usuário incorreto', _error: 'Login failed!' })
            } else if (values.password !== 'b') {
                throw new SubmissionError({ password: 'Senha incorreta', _error: 'Login failed!' })
            }
            dispatch(Creators.User({ type: 'ADD_NEW_USER', values }))

        })
}

export default Submit