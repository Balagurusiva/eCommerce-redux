import React from 'react'
import { useSelector } from 'react-redux'


const ProductComponent = () => {
    const products = useSelector((state) => state.allProduct.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className=" flex flex-row wrap items-center p-[20px]  mt-20  w-[300px]  max-h-39 border-2 border-sky-500 rounded-xl" key={id}>

                <div className="flex justify- items-center flex-col">
                    <div className="image min-h-[200px] max-h-[200px] min-w-[150px]  max--[50px] ">
                          <img src={image} alt={title} className=' h-[180px]  object-contain' />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>

            </div>)
    })
    return (
        <div className='w-full  flex justify-evenly items-center flex-col md:flex-row gap-2 flex-wrap  '>{renderList}</div>
    )
}

export default ProductComponent