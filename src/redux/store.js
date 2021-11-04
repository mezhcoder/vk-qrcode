import {createStore, compose} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from './rootReducer';
const persistConfig = {
    key: 'authType',
    storage: storage
};
const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
const persistor = persistStore(store);
export { persistor, store };