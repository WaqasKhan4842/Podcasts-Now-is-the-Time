import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { Home, Search, Download, Heart, Music, User } from 'lucide-react'; // Importing icons from lucide-react
import './aside-styles.css';

const Aside = () => {
    return (
        <aside className="aside--component">
            {/* Podcast Section */}
            <div className="title">
                <h3>Podcast</h3>
            </div>

            {/* Discover Section */}
            <div className="section">
                <h3>Discover</h3>
                <ul>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <Home size={25} />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/browse" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <Search size={25} />
                            <span>Browse</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/offline" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <Download size={25} />
                            <span>Offline</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Library Section */}
            <div className="section">
                <h3>Library</h3>
                <ul>
                    <li>
                        <NavLink to="/dashboard/custom-playlist" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <Heart size={25} />
                            <span>Custom Playlist</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/favourite" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <Music size={25} />
                            <span>Favourite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
                            <User size={25} />
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
