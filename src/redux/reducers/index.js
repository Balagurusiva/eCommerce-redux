import { ProductDetail, ProductList} from "./productReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({
    allProduct : ProductList,
    product: ProductDetail
})