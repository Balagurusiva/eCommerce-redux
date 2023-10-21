import { ActionType } from "../constants/actionType";

const initialState = {
    products: []
}

export const ProductList = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}


export const ProductDetail = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT_DETAIL:
            return {
                ...state,
                 ...payload
            }
        default:
            return state
    }
}

 
 