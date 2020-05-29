import { SUBMIT_USER_NAME } from "./actions"

export interface IInitialState {
    userName: string
}

const initialState: IInitialState = {
    userName: ''
}

interface IAction {
    type: string
    payload: any
}

export const rootReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SUBMIT_USER_NAME:
            return {
                ...state, userName: action.payload
            }
        default:
            return state
    }

}