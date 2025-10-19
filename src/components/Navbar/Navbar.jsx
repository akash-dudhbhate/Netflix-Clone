import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import bell_icon from '../../assets/bell_icon.png';
import profile_icon from '../../assets/profile_icon.png';
import caret_icon from '../../assets/caret_icon.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Netflix Logo" className='logo' />
                </Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tvshows">TVShows</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/new">New & Popular</Link></li>
                    <li><Link to="/mylist">My List</Link></li>
                    <li><Link to="/browse">Browse by Languages</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='icons'  />
                <div className="navbar-profile">
                   <img src={profile_icon} alt="" className='profile' />
                    <img src={caret_icon} alt=""  className='caret'/>
                    <div className="dropdown">
                        <p>Sign Out Of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar