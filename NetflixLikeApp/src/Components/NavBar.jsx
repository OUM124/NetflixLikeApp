import {Link} from 'react-router-dom';
import '../Css/navbar.css';
function NavBar()
{

    return <div className="navbar">
        <div className="navbar-brand">
            <Link to='/'>Ouma's Own Netflix</Link>
        </div>
        <div className="navbar-links">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/favorites'className='nav-link'>Favorites</Link>
        </div>
    </div>
}
export  default NavBar;