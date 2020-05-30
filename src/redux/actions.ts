import axios from 'axios'

export const SUBMIT_USER_NAME = 'SUBMIT_USER_NAME'

export const submitUserName = (name: string) => (dispatch: any) => {
    try {
        dispatch({ type: SUBMIT_USER_NAME, payload: name })
    } catch (err) {
        console.log(err)
    }
}

export const GET_ALL_SCHOOLS = 'GET_ALL_SCHOOLS'

export const getAllSchools = (searchText: string) => async (dispatch: any) => {
    try {
        let res = await axios.get(`http://universities.hipolabs.com/search?name=${searchText}`)
        dispatch({ type: GET_ALL_SCHOOLS, payload: res.data })
    } catch (err) {
        console.log(err)
    }
}