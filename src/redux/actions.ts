import axios from 'axios'

export const SUBMIT_USER_NAME = 'SUBMIT_USER_NAME'

export const submitUserName = (name: string) => (dispatch: any) => {
    try {
        dispatch({ type: SUBMIT_USER_NAME, payload: name })
    } catch (err) {
        console.log(err)
    }
}