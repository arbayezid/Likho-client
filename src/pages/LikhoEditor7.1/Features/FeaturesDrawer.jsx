import React from 'react';
import { BiMath, BiMenuAltRight } from 'react-icons/bi';
import { FaCreativeCommons, FaHandsHelping, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeaturesDrawer = () => {
    return (
        <div>
            <h1 className='text-white text-center m-5 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl'>Ultra <span className='text-lime-300'>Features</span></h1>
            <p className='text-center text-gray-300'>Additional features are Ultra and can be licensed separately. <br /> They offer greater flexibility and more options for a <br /> robust rich text editing experience.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4">
                {/* 1st */}
                <div className="bg-gray-100 border-4 border-lime-300 p-5 px-7 rounded-2xl space-y-4 shadow-2xl">
                    <div className="flex gap-7 items-center text-2xl ">
                        <FaHandsHelping className='text-6xl text-purple-700' />
                        <h2 className='font-poppins font-semibold text-blue-950'>Comments</h2>

                    </div>
                    <p>Combine Track Changes and Comments with real-time collaborative editing to have a synchronous, all-around co-authoring experience.</p>
                    <p className='text-purple-600 flex items-center gap-4'>Learn More <FaLongArrowAltRight /> </p>

                </div>


                {/* 2nd */}
                <div className="bg-gray-100 border-4 border-lime-300 p-7 px-7 rounded-2xl space-y-5 shadow-2xl">
                    <div className="flex gap-7 items-center text-2xl ">
                        <FaHandsHelping className='text-6xl text-purple-700' />
                        <h2 className='font-poppins font-semibold text-blue-950'>Real Time Collaboration</h2>

                    </div>
                    <p>Combine Track Changes and Comments with real-time collaborative editing to have a synchronous, all-around co-authoring experience.</p>
                    <p className='text-purple-600 flex items-center gap-4'>Learn More <FaLongArrowAltRight /> </p>

                </div>

                <div className="bg-gray-100 border-4 border-lime-300 p-7 px-7 rounded-2xl space-y-5 shadow-2xl">
                    <div className="flex gap-7 items-center text-2xl ">
                        <FaHandsHelping className='text-6xl text-purple-700' />
                        <h2 className='font-poppins font-semibold text-blue-950'>Import from Word</h2>

                    </div>
                    <p>Combine Track Changes and Comments with real-time collaborative editing to have a synchronous, all-around co-authoring experience.</p>
                    <p className='text-purple-600 flex items-center gap-4'>Learn More <FaLongArrowAltRight /> </p>

                </div>

                <div className="bg-gray-100 border-4 border-lime-300 p-7 px-7 rounded-2xl space-y-5 shadow-2xl">
                    <div className="flex gap-7 items-center text-2xl ">
                        <BiMath className='text-6xl text-purple-700' />
                        <Link to='/mathfeatures'><h2 className='font-poppins font-semibold text-blue-950'>Math Equation</h2></Link>

                    </div>
                    <p>Mathematics is the music of reason, the melody of logic, and the harmony of the universe.In the world of mathematics, </p>
                    <p className='text-purple-600 flex items-center gap-4'>Learn More <FaLongArrowAltRight /> </p>

                </div>









            </div>
        </div>
    );
};

export default FeaturesDrawer;