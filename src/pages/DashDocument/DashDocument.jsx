import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
// import { FcDocument } from "react-icons/fc";
import { Link } from 'react-router-dom';

const DashDocument = () => {


    const { user } = useContext(AuthContext)


    return (
        <div>
            <div className='container'>
                <h1 className='text-3xl font-bold py-4'>Documents</h1>
                <div className='bg-[#9aa0a3] p-6  shadow-black' >

                    <div className=''>
                        <div className=''>
                            <div className='grid text-xl lg:grid-cols-3 p-6 '>
                                <div className='inline-flex items-center gap-2'>
                                    {/* <FcDocument></FcDocument> */}
                                    <Link>Document</Link>
                                </div>
                                <p>{user.displayName}</p>
                                <p>Document Created</p>
                            </div>

                        </div>
                        <hr className='bg-black max-w-full' />
                        <div className='grid text-xl lg:grid-cols-3 p-6 '>
                            <div className='inline-flex items-center gap-2'>
                                {/* <FcDocument></FcDocument> */}
                                <Link>Document</Link>
                            </div>
                            <p>{user.displayName}</p>
                            <p>Document Created</p>
                        </div>
                        <hr className='bg-black max-w-full' />
                        <div className='grid text-xl lg:grid-cols-3 p-6 '>
                            <div className='inline-flex items-center gap-2'>
                                {/* <FcDocument></FcDocument> */}
                                <Link>Document</Link>
                            </div>
                            <p>{user.displayName}</p>
                            <p>Document Created</p>
                        </div>
                        <hr className='bg-black max-w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashDocument;