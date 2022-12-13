import { addMakanan } from "../types/actionTypes";

const initialState = {
    makananOn: []
}

const makananReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case addMakanan:
            return {
                ...state,
                makananOn: [...state.makananOn, payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default makananReducer;