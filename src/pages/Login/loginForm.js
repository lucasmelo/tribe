import React from 'react'
import { reduxForm, Field, Form } from 'redux-form'
import submit from './loginFormValidator'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <h4>{error}</h4>}
        </div>
    </div>
)

const onSubmit = values => {
    alert(JSON.stringify(values))
}

const required = v => {
    if (!v || v === '') {
        return 'Campo obrigatório'
    }
    return undefined
}

const LoginForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit(submit)}>
        <div>
            <Field name="email" type="text" component={renderField} validate={required} label="email" />
        </div>

        <div>
            <Field name="password" type="password" component={renderField} validate={required} label="senha" />
        </div>
        <div>
            <button type="submit">LOGIN</button>
        </div>
    </Form>
);

export default reduxForm({
    form: 'loginForm',
    onSubmit,
})(LoginForm);