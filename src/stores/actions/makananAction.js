import { addMakanan } from "../types/actionTypes";

export const adMakan = data => {
    return({
        type: addMakanan,
        payload: data
    })
}