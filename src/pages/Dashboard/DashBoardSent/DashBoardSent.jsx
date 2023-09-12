import React from 'react';
// import { BsFillPenFill } from "react-icons/bs";
// import { AiOutlineForm } from "react-icons/ai";

const DashBoardSent = () => {
    return (
        <div className='p-10'>
            <div className='w-3/3 m-auto'>
                <h1 className='text-4xl font-bold my-10'>Likho Inbox</h1>
                <p className='text-2xl'>Your inbox contains documents that require your action in order to complete them. Please go to doc and create one or complete them</p>
            </div>
            <div className='grid lg:grid-cols-2 my-10 w-3/4 m-auto'>
                <div>
                    <p className='inline-flex text-2xl font-bold items-center gap-2'> 
                    Sign request</p>
                    <p className='text-xl'>When someone sends you a sign request, it appears here in your inbox.</p>
                </div>
                <div>
                    <p className='inline-flex text-2xl  items-center gap-2'>   Form fills</p>
                    <p className='text-xl font-bold'>A form fill is created in your inbox when you visit a template and click, Fill a Copy.</p>
                </div>

            </div>
                <div className='text-2xl'>
                    Check back here to view completed and finalized sign requests. Easily access the audit trail history for each document, and download them to your computer for additional safekeeping.
                </div>
        </div>
    );
};

export default DashBoardSent;