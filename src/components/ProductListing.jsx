import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProductList } from '../redux/actions/productAction'
 
 

const ProductListing = () => {

    const product = useSelector((state) => state.allProduct.products) 
    const dispatch = useDispatch()
    const fetchData = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err)
            }) 
            dispatch(setProductList(response.data))
             
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing