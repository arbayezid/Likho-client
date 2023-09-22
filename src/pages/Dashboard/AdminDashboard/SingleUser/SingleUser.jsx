
import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleUser = ({ user }) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/user/${id}`)
            .then(data => {
                if (data.data.deleteCount > 0) {
                    toast('user deleted successfully')
                }

                console.log(data.data)
            })

    }

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
                <ToastContainer></ToastContainer>
                {user.name}
            </td>
            <td> {user.email}</td>
            <td> {user.role}</td>
            <th>
                <button onClick={() => handleDelete(user._id)} className="btn btn-neutral ">Delete</button>
            </th>
        </tr>
    );
};

export default SingleUser;