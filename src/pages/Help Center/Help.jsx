import React from 'react';
import { FaArrowAltCircleRight, FaBug, FaGraduationCap, FaMoneyCheck, FaQuestionCircle, FaSearch, FaShieldAlt, FaStar, FaUserCog } from 'react-icons/fa';

const Help = () => {
    return (
        <div className=''>
            <div className='text-center space-y-5 bg-gray-200 pt-20 pb-10'>
                <h2 className='text-3xl font-bold'>How can we help you?</h2>
                <div className='flex justify-center relative'>
                    <FaSearch className='absolute md:mr-96 mr-56 mt-3'></FaSearch>
                    <input className='px-10 py-2 rounded-lg md:w-[420px]' type="text" placeholder='Search for answers' />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-10 md:ml-28 ml-16 my-10'>
                <div className='w-72 space-y-3'>
                    <FaQuestionCircle className='text-2xl'></FaQuestionCircle>
                    <h2 className='text-2xl font-semibold'>General Question</h2>
                    <p className='text-gray-400 font-medium'>Find out how to get started with Likho, and system requirements, create a trial or switch to a subscription.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>
                <div className='w-72 space-y-3'>
                    <FaUserCog className='text-2xl'></FaUserCog>
                    <h2 className='text-2xl font-semibold'>Manage your account</h2>
                    <p className='text-gray-400 font-medium'>Get help for everyday tasks like user management, account access, or updating your account email.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>
                <div className='w-72 space-y-3'>
                    <FaMoneyCheck className='text-2xl'></FaMoneyCheck>
                    <h2 className='text-2xl font-semibold'>Billing and Plans</h2>
                    <p className='text-gray-400 font-medium'>Learn about billing cycles, payment methods, invoice location, and what our Business Plan can offer your team.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>
                <div className='w-72 space-y-3'>
                    <FaBug className='text-2xl'></FaBug>
                    <h2 className='text-2xl font-semibold'>Troubleshooting</h2>
                    <p className='text-gray-400 font-medium'>Step-by-step guides for solving common documents, libraries, components, or troubleshooting issues.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>
                <div className='w-72 space-y-3'>
                    <FaStar className='text-2xl'></FaStar>
                    <h2 className='text-2xl font-semibold'>Likho Features</h2>
                    <p className='text-gray-400 font-medium'>Frequently asked questions about how Likho works on your mac, your browser, or on your iPhone.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>
                <div className='w-72 space-y-3'>
                    <FaShieldAlt className='text-2xl'></FaShieldAlt>
                    <h2 className='text-2xl font-semibold'>Security and Policies</h2>
                    <p className='text-gray-400 font-medium'>You can find information on our Terms of Service, policies, and how we handle data and security in Likho.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>
                <div className='w-72 space-y-3'>
                    <FaGraduationCap className='text-2xl'></FaGraduationCap>
                    <h2 className='text-2xl font-semibold'>Education Plan</h2>
                    <p className='text-gray-400 font-medium'>We are committed to helping students, teachers, and Academic Institutions with a Free version of Likho.</p>
                    <div className='flex items-center gap-3 text-gray-400 font-bold mt-10 hover:bg-slate-200 cursor-pointer w-40  py-2 rounded-lg'>
                        <p>See All Article </p>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Help;