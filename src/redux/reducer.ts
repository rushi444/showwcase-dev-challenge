import { SUBMIT_USER_NAME, GET_ALL_SCHOOLS, ADD_NEW_EDUCATION, DELETE_EDUCATION } from '../shared/constants'
import { IInitialState, IAction, ISchool } from '../shared/types'

const initialState: IInitialState = {
    userName: '',
    searchResults: [],
    educationList: []
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
        case ADD_NEW_EDUCATION:
            return {
                ...state, educationList: [action.payload, ...state.educationList]
            }
        case DELETE_EDUCATION:
            return {
                ...state, educationList: state.educationList.filter((education) => education.id !== action.payload)
            }
        default:
            return state
    }
}

