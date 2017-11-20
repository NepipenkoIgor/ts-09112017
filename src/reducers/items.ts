import { GET_ITEMS_SUCCESS } from '../actions/items';

export type Item = {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
};

export const initData: Item[] = [];

// tslint:disable-next-line
export const itemsReducer: any =
    (state: Item[] = initData, action: { type: string, payload: Item[] }): Item[] => {
        if (action.type === GET_ITEMS_SUCCESS) {
            state = [...action.payload];
        }
        return state;
    };