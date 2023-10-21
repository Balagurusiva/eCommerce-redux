import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductComponent = () => {
    const products = useSelector((state) => state.allProduct.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (

            <Link to={'product/' + id} className=' card  flex  max-h-[350px]  border-2 border-sky-500 flex-col flex  flex-col wrap items-center p-[20px]     w-[300px]    rounded-xl  '>
                <div key={id}>
                    <div className="flex   items-center flex-col">
                        <div className="image min-h-[200px] max-h-[200px] min-w-[150px]  max--[50px] ">
                            <img src={image} alt={title} className=' h-[180px]  object-contain' />
                        </div>
                    </div>
                </div>
                <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                </div>
            </Link>
        )
    })
    return (
        <div className='w-full absolute top-[70px] z-1 flex justify-evenly items-center flex-col md:flex-row gap-6 flex-wrap   '>{renderList}</div>
    )
}

export default ProductComponent