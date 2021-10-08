import { Link } from "react-router-dom";

const RenderList = ({ data, buttonText, handleClick }) => {
    return (
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.image} alt="" style={{ width: '180px', height: '280px'}} />
                        <Link to={`/${item.id}`} style={{ margin: '0px 16px', color: 'black' }}  onClick={() => handleClick(item)}>
                            <p>{buttonText}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default RenderList