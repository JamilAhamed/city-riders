import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App'
import './Navar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleSignIn =() => {
        history.replace("/login")
    }
    const [navLinkOpen, setNavLinkOpen] = useState(false);
    const handleNavLinkToggle = () => {
        setNavLinkOpen(!navLinkOpen);
    }
    const renderClasses =() =>{
        let classes ="navLinks";
        if (navLinkOpen){
            classes ="navLinks"
        }
        return classes;
    }
    return (
        <nav>
            {/* <div className="logo">
            <Link to="/home">
                    <img src={logo} alt="" />
                    </Link>
            </div> */}
            <ul className={renderClasses()}>
                <li className="link"> <Link to="/home">Home</Link> </li>
                <li className="link"> <Link to="/search-rides/car">Destination</Link> </li>
                <li className="link"> <Link to="/">Blog</Link> </li>
                <li className="link"> <Link to="/">Contact us</Link> </li>
                {loggedInUser.name &&
                    <li className="userName link">{loggedInUser.name}</li>
                }
                <li className="link">
                {
                    loggedInUser.email ? <button className="btn" onClick={() => setLoggedInUser({})}>Sign Out</button> : <button className="btn" onClick={handleSignIn} >Sign In</button>
               
                }
                </li>
            </ul>
            <div onClick={handleNavLinkToggle} className="hamburger-toggle">
                {/* <img src={hamburgerMenu} alt="" /> */}
            </div>
        </nav>
    );
};

export default Navbar;