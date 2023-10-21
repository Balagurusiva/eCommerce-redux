import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import Header from './components/Header'

const App = () => {
    return (

        <div className='m-o '>
            <Header />
            <Routes>
                <Route path='/' exact element={<ProductListing />} />
                <Route path='/product/:id' exact element={<ProductDetail />} />
                <Route >404 page not found</Route>
            </Routes>
        </div>

    )
}

export default App