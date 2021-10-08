import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart/actions';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <div>
            {cart.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.image} alt="" style={{ width: '180px', height: '280px'}} />
                        <p style={{ textAlign: 'left', margin: '0px 0px 16px 0px' }}>{item.title}</p>
                        <p style={{ textAlign: 'left', margin: '0px 0px 24px 0px' }}>{item.author}</p>
                        <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart