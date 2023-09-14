import React from 'react';
import { FaHome, FaStoreAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='text-[#1c3a45]'>
            <li><Link to={'/'}><FaHome></FaHome> Admin Home</Link></li>
            <li><Link to={'/dashboard/allUser'}><FaStoreAlt></FaStoreAlt> Manage users</Link></li>
            <li><Link to={'/dashboard/allClass'}><FaStoreAlt></FaStoreAlt> All user</Link></li>
            <li><Link to={'/dashboard/stats'}><FaStoreAlt></FaStoreAlt> Statistics</Link></li>

        </div>
    );
};

export default AdminDashboard;