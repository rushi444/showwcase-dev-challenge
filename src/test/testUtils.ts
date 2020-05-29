import { createStore } from 'redux'
import { rootReducer } from '../redux/reducer'

interface IMockInitialState {
    userName?: string
}

export const storeFactory = (initialState: IMockInitialState) => {
    return createStore(rootReducer, initialState as any);
};