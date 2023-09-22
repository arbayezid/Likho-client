import React from 'react';
import { FaHome, FaStoreAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='text-[#1c3a45]'>
            <li className='mb-4'><Link className='text-xl ' to={'/'}><FaHome></FaHome> Admin Home</Link></li>
            <li className='mb-4'><Link className='text-xl ' to={'/doc'}><FaStoreAlt></FaStoreAlt> Go Editor</Link></li>
            <li className='mb-4'><Link className='text-xl ' to={'/dashboard/allUser'}><FaUserAlt></FaUserAlt> All user</Link></li>
            <li className='mb-4'><Link className='text-xl ' to={'/dashboard/stats'}><FaStoreAlt></FaStoreAlt> Statistics</Link></li>

        </div>
    );
};

export default AdminDashboard;