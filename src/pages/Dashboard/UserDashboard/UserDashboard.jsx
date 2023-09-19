import React from 'react';
import { FaHistory, FaHome, FaPlus, FaStoreAlt, FaThList, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const UserDashboard = () => {
   
    return (
        <div className='text-[#1c3a45] gap-3'>
            <li><Link to={'/'}><FaHome></FaHome> User Home</Link></li>
            <li><Link to={'/dashboard/newDoc'}><FaPlus></FaPlus>New Document</Link></li>
            <li><Link to={'/dashboard/inbox'}><FaThList></FaThList>Inbox</Link></li>
            <li><Link to={'/dashboard/sent'}><FaThList></FaThList>Sent</Link></li>
            <li><Link to={'/dashboard/setting'}><FaThList></FaThList>Setting</Link></li>
            <li><Link to={'/dashboard/template'}><FaThList></FaThList>Template</Link></li>
            {/* <li><Link to={`/dashboard/payment/${AllClasses._id}`}><FaWallet></FaWallet> Payment</Link></li> */}
        
        </div>
    );
};

export default UserDashboard;