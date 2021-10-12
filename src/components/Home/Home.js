import React, { useState } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import { products } from '../../assets/productsData'
import Product from '../Product/Product'
import RenderList from '../RenderList/RenderList'
import BooksList from '../BooksList/BooksList'

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    const history = useHistory()

    const handleShowDetails = (product) => {
        setSelectedProduct(product)
        setShowDetails(true)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Home</h1>
            <RenderList data={products} buttonText='View Details' handleClick={handleShowDetails} />
            <Switch>
                <Route path='/:userId'>
                    {showDetails ? <Product product={selectedProduct} handleClick={setShowDetails}  /> : history.push('/')}
                </Route>
            </Switch>
            <BooksList />
        </div>
    )
}

export default Home