import moment from 'moment/moment';
import React from 'react';
import { FaEdit, FaMailBulk, FaWpforms } from 'react-icons/fa';

const Counter = () => {
    return (
        <div className={`bg-[#c3c9d7] py-12 text-white mt-1.5 lg:w-full lg:ml-35 `}
         style={{height:'70vh', width:'80rem'}}
        >

            
            <h1 className='text-center text-4xl font-bold pb-8 '>Take a look on our progress</h1>
            <h1 className='text-center text-3xl font-bold pb-8 ' >{moment().format("MMMM Do YYYY,")}</h1>
            

            
            <div className='grid md:grid-cols-2 w-full lg:grid-cols-3 sm:space-y-4'>
                <div className='flex justify-center items-center gap-2'>
                    <FaWpforms className="w-10 h-10 "></FaWpforms>
                    <div>
                        <p>780</p>
                        <p>Forms filled out</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaEdit className="w-10 h-10 "></FaEdit>
                    <div>
                        <p>875</p>
                        <p>Forms signed</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaMailBulk className="w-10 h-10 "></FaMailBulk>
                    <div>
                        <p>1086</p>
                        <p>Forms sent</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Counter;