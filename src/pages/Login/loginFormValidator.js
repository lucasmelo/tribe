import { SubmissionError } from 'redux-form'
import { Creators } from '../../redux/ducks/login'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Submit = (values, dispatch) => {

    if (!['tribe@tribe.com'].includes(values.email)) {
        throw new SubmissionError({ email: 'Usuário incorreto', _error: 'Login failed!' })
    }
    else if (values.password !== 'tribe') {
        throw new SubmissionError({ password: 'Senha incorreta', _error: 'Login failed!' })
    }
    else {
        dispatch(Creators.Login({ type: 'USER_LOGIN', values }))
    }

}

export default Submit;
