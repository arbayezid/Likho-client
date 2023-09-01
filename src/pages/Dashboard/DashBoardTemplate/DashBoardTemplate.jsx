import React from 'react';
import { BsHouseAdd, BsArrowRight, BsPencil } from 'react-icons/Bs';
import { HiOutlineDocumentAdd, HiOutlineDocumentText } from 'react-icons/Hi';
import { Link } from 'react-router-dom';

const DashBoardTemplate = () => {
    return (
        <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', width: '80rem' }} >
            <div >
                <div className='text-center'>
                    <div className='flex items-center justify-center pb-2'>
                        <BsHouseAdd className="w-16 h-16"></BsHouseAdd>
                    </div>

                    <h4 className=''>Hey,this is your</h4>
                    <h4 className='text-3xl font-bold'><span className='text-blue-600'>L</span>ikho Dashboard</h4>

                </div>
                <h6>Get Started:</h6>

                <Link to="drags">
                <div className='bg-slate-100 border mb-4 '>
                    <button className="flex items-center p-4 text-xl">
                        <HiOutlineDocumentAdd className='w-10 h-10 mr-4' />  Import a document <span className="ml-2"><BsArrowRight className='w-10 h-10 ml-80' /></span>
                    </button>
                </div></Link>

               <Link to="drags">

               <div className='bg-slate-100 border mb-4'>
                    <button className="flex items-center p-4 text-xl">
                        <HiOutlineDocumentText className='w-10 h-10 mr-4' />  Import a document <span className="ml-2"><BsArrowRight className='w-10 h-10 ml-80' /></span>
                    </button>
                </div>
                </Link>

                <Link to="drags">
                <div className='bg-slate-100 border mb-8 '>
                    <button className="flex items-center p-4 text-xl">
                        <BsPencil className='w-10 h-10 mr-4' />  Import a document <span className="ml-2"><BsArrowRight className='w-10 h-10 ml-80' /></span>
                    </button>
                </div>
                </Link>

               <div className='mb-16'>
               <h6 className='text-sm  '>Files not found ? Try by name, or browse and filter your dashboard
             you are currently logged in as <span className='font-bold'>mahejabinmou.99@gmail.com</span></h6>

               </div>

            </div>

        </div>
    );
};

export default DashBoardTemplate;