import { Link } from "react-router-dom";
import './NavbarStyles.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-styles-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;