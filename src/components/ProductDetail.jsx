import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { selectedProductDetail } from '../redux/actions/productAction'
import { useSelector } from 'react-redux'


const ProductDetail =  () => {

    const productDetail = useSelector((state) => state.product) 
    console.log(productDetail)
    const dispatch = useDispatch() 

    const fetchData = async () =>{
        const response = await axios 
                                                   .get('https://fakestoreapi.com/products/1')
                                                   .catch((err) =>{
                                                    console.log(err)
                                                   })
       dispatch(selectedProductDetail(response.data))
    }
 

    useEffect(()=>{
         
        fetchData()},
        [])
  return (
    <div>
        {productDetail.id}
    </div>
  )
}

export default ProductDetail