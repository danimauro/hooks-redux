import { createStore, combineReducers } from 'redux';

//importamos nuestros reducers
import results from './reducers/results';
import currentItem from './reducers/currentItem';
import suggestions from './reducers/suggestions';

//creamos el reducer
const reducer = combineReducers({
    results,
    currentItem,
    suggestions
})

//creamos el store
const store = createStore(reducer);

export default store;