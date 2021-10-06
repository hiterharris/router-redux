import React, { useState } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import { products } from '../../assets/products'
import Product from '../Product/Product'
import RenderList from '../RenderList/RenderList'

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const history = useHistory()
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Home</h1>
            <RenderList products={products} setSelected={setSelectedProduct} />
            <Switch>
                <Route path='/:userId'>
                    {selectedProduct ? <Product product={selectedProduct}/> : history.push('/')}
                </Route>
            </Switch>
        </div>
    )
}

export default Home