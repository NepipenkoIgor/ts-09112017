import { applyMiddleware, compose, createStore, Store } from 'redux';
import { rootReducer } from '../reducers';
import { Item } from '../reducers/items';
import { itemsEpic } from '../epics/items';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export type CourseStore = {
    items: Item[],
    searchTerm: string
};

const epicMiddleware: EpicMiddleware<any, any, any> = createEpicMiddleware(itemsEpic);

const initStore: () => Store<CourseStore> = () => {
    const composeEnchancers: typeof compose =
        typeof window === 'object' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'Typescript course module'
            })
            : compose;
    return createStore<CourseStore>(
        rootReducer,
        composeEnchancers(applyMiddleware(epicMiddleware))
    );
};

export const store: Store<CourseStore> = initStore();