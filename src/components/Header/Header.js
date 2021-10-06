import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
        </div>
    )
}

export default Header