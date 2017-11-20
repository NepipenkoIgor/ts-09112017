import { combineEpics, Epic } from 'redux-observable';
import { itemsEpic } from './items';

// tslint:disable-next-line
export const epicMiddleware: Epic<any, any, any> = combineEpics(
    itemsEpic
);