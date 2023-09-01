import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const DashDocument = () => {


    const { user } = useContext(AuthContext)


    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold py-4'>Documents</h1>
                <div className='bg-[#9aa0a3] p-6  shadow-black' >

                    <div className=''>
                        <div className=''>
                            <div className='grid lg:grid-cols-3 p-6 '>
                                 <p>Document</p>
                                <p>{user.displayName}</p>
                                <p>Document Created</p>
                            </div>

                        </div>
                        <hr className='bg-black max-w-full' />
                        <div className='grid lg:grid-cols-3 p-6 '>
                            <p>Document</p>
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