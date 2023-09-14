import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const AllUser = () => {

    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://likho-backend.vercel.app/user')
            return res.data
        }
    })

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {/* row 2 */}

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;