import React, { useContext } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';
import { AuthContext } from '../Providers/AuthProvider';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';


const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const [useAdmins] = useAdmin()
    const [useUsers] = useUser()



    console.log(useAdmins, useUsers, user?.email)



    return (
        <div>
            {
                useAdmins && <AdminDashboard></AdminDashboard>


            }

            {
                useUsers && <UserDashboard></UserDashboard>
            }

        </div>
    );
};

export default Dashboard;