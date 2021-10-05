import { Link } from "react-router-dom";

const RenderList = (props) => {
    const { products, setSelected } = props

    return (
        <div style={{ marginTop: '48px' }}>
            {products.map((product, index) => {
                return (
                    <Link to={`/${product.id}`} style={{ margin: '0px 16px' }} key={index} onClick={() => setSelected(product)}>
                        <img src={product.image} alt="Book Cover" style={{ width: '180px', height: '280px'}} />
                    </Link>
                )
            })}
        </div>
    )
}

export default RenderList