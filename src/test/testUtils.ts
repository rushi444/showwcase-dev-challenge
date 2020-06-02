import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../redux/reducer'
import thunk from 'redux-thunk'
import { EducationObject } from '../shared/types';

interface IMockInitialState {
    userName?: string
    searchResults?: string[]
    educationList?: EducationObject[]
}

export const storeFactory = (initialState: IMockInitialState) => {
    return createStore(rootReducer, initialState as any, applyMiddleware(thunk));
};