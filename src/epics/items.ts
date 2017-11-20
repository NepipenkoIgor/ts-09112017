
import { Action } from 'redux';
import { AxiosResponse } from 'axios';
import { ActionsObservable } from 'redux-observable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GET_ITEMS_PENDING, GET_ITEMS_SUCCESS } from '../actions/items';
import { Item } from '../reducers/items';
import { api } from '../services/apiCall.service';


export const itemsEpic: (action$: ActionsObservable<Action>) => any =
    (action$: ActionsObservable<Action>) => {
        return action$
            .ofType(GET_ITEMS_PENDING)
            .switchMap(() => Observable
                .fromPromise(api.getItems('1okss20'))
                .map((items: AxiosResponse<Item[]>) => {
                    return {
                        type: GET_ITEMS_SUCCESS,
                        payload: items.data
                    };
                })
                .catch((error: { message: string }) => {
                    return [
                        {
                            type: GET_ITEMS_SUCCESS,
                            payload: { error: error.message }
                        }
                    ];
                }));
    };