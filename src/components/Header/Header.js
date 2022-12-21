import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import './Header.css';
import { getAuth } from 'firebase/auth';
import app from './../../Firebase/firebase.config';

const auth = getAuth(app)
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {
                    user?.uid ?
                        <button className='logout-btn' onClick={handleSignOut}>LogOut</button>
                        :
                        <>
                            <Link to="/login">Sign In</Link>
                            <Link to="/register">Register</Link>
                        </>
                }

            </div>
        </nav>
    );
};

export default Header;