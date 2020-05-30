import axios from 'axios'

import { SUBMIT_USER_NAME, GET_ALL_SCHOOLS } from '../shared/constants'

export const submitUserName = (name: string) => (dispatch: any) => {
    try {
        dispatch({ type: SUBMIT_USER_NAME, payload: name })
    } catch (err) {
        console.log(err)
    }
}

export const getAllSchools = (searchText: string) => async (dispatch: any) => {
    try {
        let res = await axios.get(`http://universities.hipolabs.com/search?name=${searchText}`)
        dispatch({ type: GET_ALL_SCHOOLS, payload: res.data })
    } catch (err) {
        console.log(err)
    }
}