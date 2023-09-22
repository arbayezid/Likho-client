import React, { useContext } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';
import { AuthContext } from '../Providers/AuthProvider';

import UserDashboard from './UserDashboard/UserDashboard';
import { Outlet } from 'react-router-dom';
import AdminDashboard from './AdminDashBoard/AdminDashboard';


const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const [useAdmins] = useAdmin()
    const [useUsers] = useUser()



    console.log(useAdmins, useUsers, user?.email)



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center bg-[#e4f1ea] justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 h-full bg-[#c7cfca] ">
                    {/* Sidebar content here */}



                    { useAdmins && <AdminDashboard></AdminDashboard>}
                    { useUsers && <UserDashboard></UserDashboard> }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;