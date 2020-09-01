import React from 'react'
import { reduxForm, Field, Form } from 'redux-form'
import submit from './registerFormValidator'

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

const RegisterForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit(submit)}>
        <div>
            <Field name="name" type="text" component={renderField} validate={required} label="nome" />
        </div>

        <div>
            <Field name="surname" type="text" component={renderField} validate={required} label="sobrenome" />
        </div>

        <div>
            <Field name="username" type="text" component={renderField} validate={required} label="username" />
        </div>

        <div>
            <Field name="email" type="text" component={renderField} validate={required} label="email" />
        </div>

        <div>
            <Field name="password" type="password" component={renderField} validate={required} label="senha" />
        </div>

        <div>
            <Field name="password-repeated" type="password" component={renderField} validate={required} label="digite a senha novamente" />
        </div>

        <div>
            <button type="submit">Cadastrar</button>
        </div>
    </Form>
);

export default reduxForm({
    form: 'registerForm',
    onSubmit,
})(RegisterForm);