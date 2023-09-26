import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import SingleUser from '../SingleUser/SingleUser';

const AllUser = () => {

    const { data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://likho-backend-himlaoy.vercel.app/user')
            console.log('res',res)
            return res.data
        }
    })
    console.log(users)

    return (
        <div className="overflow-x-auto text-xl">
            <table className="table">
                {/* head */}
                <thead className='text-xl'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody className='text-xl'>

                {
                    users?.map(user=> <SingleUser key={user._id} user={user}></SingleUser> )
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;