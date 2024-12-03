import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Aside from './aside';
import BrowsePage from './BrowsePage/index';
import OfflinePage from './OfflinePage/index';
import CustomPlaylistPage from './CustomPlaylistPage/index';
import FavouritePage from './FavouritePage/index';
import ProfilePage from './ProfilePage/index';
import './dashboard-styles.css';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Static Aside Section */}
                <div className="col-12 col-lg-2 aside h-auto">
                    <Aside />
                </div>

                {/* Dynamic Content Section */}
                <div className="col-12 col-lg-10 h-100">
                    <Routes>
                        <Route path="browse" element={<BrowsePage />} />
                        <Route path="offline" element={<OfflinePage />} />
                        <Route path="custom-playlist" element={<CustomPlaylistPage />} />
                        <Route path="favourite" element={<FavouritePage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        {/* Default Route */}
                        <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
