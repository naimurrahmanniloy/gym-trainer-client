import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'

const Header = () => {
    return (
        <div className="navbar bg-base-100 mb-5 p-5 text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className='m-4 text-xl' >Home</Link>
                        <Link to='/login' className='m-4 text-xl'>Login</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-10 rounded-full m-2' src={logo} alt="" />
                    <p>Online Trianee</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/' className='m-4 text-xl'>Home</Link>
                    <Link to='/login' className='m-4 text-xl'>Login</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <p className='text-center'>Naimur Rahman Niloy</p>
                        <button className='btn btn-ghost mt-3'>Logout</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;