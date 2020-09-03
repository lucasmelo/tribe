import axios from 'axios'
import { takeLatest, put, call, all  } from 'redux-saga/effects'
import { ENV } from '../environment'


const delay = (ms) => new Promise(res => setTimeout(res, ms))


const getLogin = () => {
    return axios.get(`${ENV.url}/login`)
        .then(function (response) {
            console.log(response.data)
        }).catch();
} 

function* asyncUserLogin(action) {
    try {
        yield delay(2000);
        yield call(getLogin, action.payload);
        yield put({ type: 'USER_LOGIN', payload: action.payload })
    } catch (err) {
        console.log(err)
    }

};

export default function* root() {
    yield [
        yield all([takeLatest('ASYNC_USER_LOGIN', asyncUserLogin)])
    ];
}