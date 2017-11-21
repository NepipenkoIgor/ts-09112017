import { UPDATE_SEARCH_TERM } from '../actions/searchTerm';

export type SearchTerm = string;

export const initData: SearchTerm = '';

// tslint:disable-next-line
export const serchTermReducer: any =
    (state: string = initData, action: { type: string, payload: string }): string => {
        if (action.type === UPDATE_SEARCH_TERM) {
            state = action.payload;
        }
        return state;
    };