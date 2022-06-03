import { createStore } from 'redux';
import reducer from './store/reducer';

export const store = createStore(reducer);