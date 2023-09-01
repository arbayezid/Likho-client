import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import Container from '../Container';


const Blog = () => {
    return (
        <div className="pt-10">
            <div className='bg-blue-50'>

                <div className=" mt-10 p-20">
                    <div className="space-y-2 font-thin">
                        <h2 className='text-blue-600 text-center text-xl font-bold'>Blog</h2>
                        <h4 className='text-center text-gray-800 text-4xl font-bold'>The <span className='text-blue-600'>Latest</span> About Likho</h4>
                    </div>

                    <Container>
                        <div className="grid grid-cols-2 space-x-7 mx-16">
                            {/* left side */}
                            <div className="mt-20 border-1 bg-gray-50 border rounded-2xl hover:shadow-lg hover:border-blue-200 border-gray-200 p-5 space-y-2">
                                <div className="gap-3 flex font-medium text-gray-700">
                                    <p className='border-1 border rounded-3xl px-2 font-sans  border-blue-400 bg-blue-100'>Likho</p>
                                    <p className='border-1 border rounded-3xl px-2 font-sans  border-blue-400 bg-blue-100'>News</p>

                                </div>
                                <h2 className='text-xl text-gray-700 font-bold'>LIKHO v7.66.0 of all New Features </h2>
                                <p className='text-gray-600 font-mono'>Support for time zones, Charts in alpha, Data Grid filtering, and more.</p>



                                <div className="flex justify-between items-center pt-5">
                                    <div className="">
                                        <img className='w-8 h-8 rounded-full' src="https://i.ibb.co/ZzBS4gV/279178755-1134720793979923-7786829488613595539-n.jpg" alt="" />
                                        <h5 className='font-semibold text-gray-700'>Ataullah Mesbah</h5>
                                        <p className='text-xs font-mono'>Wed Aug 24 2023</p>
                                    </div>

                                    <p className="flex items-center gap-2 text-blue-800 font-bold text-xs">
                                        Read More <FaChevronRight className="text-xs" />
                                    </p>
                                </div>



                            </div>


                            <div className="mt-20 border-1 hover:border-blue-200 bg-gray-50 border rounded-2xl hover:shadow-lg border-gray-200 p-5 space-y-2">
                                <div className="gap-3 flex font-medium text-gray-700">
                                    <p className='border-1 border rounded-3xl px-2 font-sans  border-blue-400 bg-blue-100'>Likho</p>
                                    <p className='border-1 border rounded-3xl px-2 font-sans  border-blue-400 bg-blue-100'>News</p>

                                </div>
                                <h2 className='text-xl text-gray-700 font-bold'>LIKHO is now on Chat Assistance! </h2>
                                <p className='text-gray-600 font-mono'>Support for time zones, Charts in alpha, Data Grid filtering, and more.</p>



                                <div className="flex justify-between items-center pt-5">
                                    <div className="">
                                        <img className='w-8 h-8 rounded-full' src="https://i.ibb.co/ZzBS4gV/279178755-1134720793979923-7786829488613595539-n.jpg" alt="" />
                                        <h5 className='font-semibold text-gray-700'>Ataullah Mesbah</h5>
                                        <p className='text-xs font-mono'>Wed Aug 24 2023</p>
                                    </div>

                                    <p className="flex items-center gap-2 text-blue-800 font-bold text-xs">
                                        Read More <FaChevronRight className="text-xs" />
                                    </p>
                                </div>



                            </div>
                        </div>

                    </Container>

                </div>
                {/* Post  &  Blog   */}

                <div className="bg-gray-50 p-20">

                    <Container>
                        <h1 className='text-gray-700 font-bold text-xl mx-16'>Posts</h1>
                        <h1 className='text-gray-700 font-bold text-xl mx-16'>Update Post ...TO DO...</h1>

                    </Container>




                </div>
















            </div>
        </div>
    );
};

export default Blog;