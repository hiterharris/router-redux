import close from '../../assets/icons/close.png'
import './product.css'
import { addItem } from '../../store/cart/actions';
import { useDispatch } from 'react-redux';

const Product = ({ product, handleClick }) => {
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className='modal'>
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                    <img style={{ width: '3%'}} src={close} alt="close modal button" onClick={() => handleClick(false)} />
                </div>
                <p style={{ textAlign: 'left', margin: '0px 0px 16px 0px' }}>{product.title}</p>
                <p style={{ textAlign: 'left', margin: '0px 0px 24px 0px' }}>{product.author}</p>
                <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product