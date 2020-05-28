
interface IInitialState {
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
        default:
            return state
    }

}