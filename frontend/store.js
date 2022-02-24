import  { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

window.reducer = reducer

export default store;