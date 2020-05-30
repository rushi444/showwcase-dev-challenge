import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../redux/reducer'
import thunk from 'redux-thunk'

interface IMockInitialState {
    userName?: string
}

export const storeFactory = (initialState: IMockInitialState) => {
    return createStore(rootReducer, initialState as any, applyMiddleware(thunk));
};