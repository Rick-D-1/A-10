import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvieder';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const NavBar = () => {
    const { user } = useContext(AuthContext)


    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={'/'}>Home</Link></li>
                        <li>
                            <Link to={'/Services'}>Services</Link>
                        </li>
                        <li><Link to={'/Profile'}>My Profile</Link></li>
                    </ul>
                </div>
                <a className="text-4xl font-bold">Game<span className='text-orange-400'>Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li>
                        <Link to={'/Services'}>Services</Link>
                    </li>
                    <li><Link to={'/Profile'}>My Profile</Link></li>
                </ul>
            </div>
            {
                user && <div className="navbar-end">
                    <btn onClick={handleSignOut} className='btn'>LogOut</btn>
                </div>
            }
            {
                !user && <div className="navbar-end">
                    <Link to={'/LogIn'} className='btn'>LogIn</Link>
                </div>
            }
        </div>
    );
};

export default NavBar;