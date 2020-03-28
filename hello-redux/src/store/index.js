import { createStore } from 'redux';
import reducer from '../reducers/index';
const initialState = { tech: "Redux" };
export const store = createStore(reducer, initialState);