const Product = ({ product }) => {

    const style = {
        width: '20%',
        margin: '24px auto',
        padding: '12px',
        border: '1px solid black',
    }

    return (
        <div style={style}>
            <p style={{ textAlign: 'left', margin: '0px 0px 16px 0px' }}>{product.title}</p>
            <p style={{ textAlign: 'left', margin: '0px 0px 24px 0px' }}>{product.author}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product