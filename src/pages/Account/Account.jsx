/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { Avatar, IconButton, Badge } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


const Account = () => {
    const user = useContext(AuthContext);
    console.log(user.user?.displayName)
    return (
        <div className='grid grid-cols-3 shadow-md'>
            <div className='flex justify-start items-center pl-5 py-3'>
                <Avatar alt="Remy Sharp" sx={{ width: 50, height: 50, }} src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=sph" />
                <div className='pl-2'>
                    <h2 className='text-lg font-bold text-slate-600 font-sans'>{user.user?.displayName}</h2>
                    <p className='text-gray-500'>{user.user?.email}</p>
                </div>
            </div>
            <div className='grid justify-start items-center  '>
                <h1 className='text-2xl font-serif font-bold'><span className='text-sky-500'>L</span><Link to={'/'}>ikho</Link> </h1>
            </div>
            <div className='flex justify-end items-center gap-2 mr-5'>
                <h3> <button className='py-1 px-2 bg-[#0284C7] text-white text-xs rounded-md'>UPGRADE </button> </h3>
                <h3>
                    <IconButton aria-label={100}>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                </h3>
                <h3>
                    <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40, }} src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1842592228.1683275805&semt=sph" />
                </h3>
            </div>
        </div>
    );
};

export default Account;