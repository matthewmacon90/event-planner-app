import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import './FooterStyles.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='footer-leftside'>
                <ul className="footer-styles-ul">
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
            </div>
            <div className='footer-middle'>
                <p>© 2021 - All rights reserved</p>
            </div>
            <div className='footer-rightside'>
                <div className='footer-social'>
                    <SocialIcon url="https://www.facebook.com/yourprofile" />
                    <SocialIcon url="https://www.instagram.com/yourprofile" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
