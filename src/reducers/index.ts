import { combineReducers, Reducer } from 'redux';
import { CourseStore } from '../store/root.store';
import { itemsReducer } from './items';
import { serchTermReducer } from './searchTerm';

export const rootReducer: Reducer<CourseStore> = combineReducers({
    items: itemsReducer,
    searchTerm: serchTermReducer
});