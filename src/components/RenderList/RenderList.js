import { Link } from "react-router-dom";

const RenderList = (props) => {
    const { products, setSelected } = props

    return (
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <img src={product.image} alt="Book Cover" style={{ width: '180px', height: '280px'}} />
                        <Link to={`/${product.id}`} style={{ margin: '0px 16px' }}  onClick={() => setSelected(product)}>
                            <div>
                                <p>View Info</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default RenderList