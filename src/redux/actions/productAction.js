import { ActionType } from "../constants/actionType"

export const setProductList = (products) =>{
    return {
    type:ActionType.SET_PRODUCTS,
    payload : products,
    }
}

export const selectedProductDetail = (products) => {
    return {
        type:ActionType.SELECTED_PRODUCT_DETAIL,
        payload:products
    }
}

export const removeSelectedProducts = (products) => {
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCT,
        payload:products
    }
}