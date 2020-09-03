import { createStore, applyMiddleware } from "redux";
import rootReducer from "./ducks";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login', 'register']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga)

const persistor = persistStore(store);

export { store, persistor };