import React, { useState } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import { products } from '../../assets/productsData'
import Product from '../Product/Product'
import RenderList from '../RenderList/RenderList'
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleShowDetails = (product) => {
        setSelectedProduct(product)
        setShowDetails(true)
    }

    console.log('counter: ', counter)

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
            <p>{counter}</p>
            <h1>Home</h1>
            <RenderList data={products} buttonText='View Details' handleClick={handleShowDetails} />
            <Switch>
                <Route path='/:userId'>
                    {showDetails ? <Product product={selectedProduct} handleClick={setShowDetails}  /> : history.push('/')}
                </Route>
            </Switch>
        </div>
    )
}

export default Home