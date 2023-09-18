
import React from 'react';


const SingleUser = ({user}) => {

    return (
        <tr>
            
            {/* <td>
                <div className="flex items-center o space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td> */}
            <td>
               {user.name}
            </td>
            <td> {user.email}</td>
            <td> {user.role}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default SingleUser;