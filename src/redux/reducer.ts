import { SUBMIT_USER_NAME, GET_ALL_SCHOOLS } from "./actions"

export interface IInitialState {
    userName: string
    searchResults: string[]
}

const initialState: IInitialState = {
    userName: '',
    searchResults: []
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
        case GET_ALL_SCHOOLS:
            return {
                ...state, searchResults: action.payload.map((school: ISchool) => school.name).slice(0, 20)
            }
        default:
            return state
    }

}

interface ISchool {
    web_page: string
    country: string
    domain: string
    name: string
}