import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Submit = (values) => {
    return sleep(1000) // simulate server latency
        .then(() => {
            if (!['john', 'paul', 'george', 'ringo'].includes(values.email)) {
                throw new SubmissionError({ email: 'Usuário incorreto', _error: 'Login failed!' })
            } else if (values.password !== 'redux-form') {
                throw new SubmissionError({ password: 'Senha incorreta', _error: 'Login failed!' })
            } else {
                window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
            }
        })
}



export default Submit