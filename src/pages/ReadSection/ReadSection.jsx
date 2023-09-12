import React, { useEffect } from 'react';
import { FaDesktop, FaFileAlt, FaImage, FaSave, FaTextHeight } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import AOS from "aos";
import "aos/dist/aos.css"

const ReadSection = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='pt-10  w-4/5 md:w-4/5 lg:w-4/5 mx-auto'>
            <h2 className='text-center text-4xl text-blue-950 font-bold font-poppins'>All the features you love here</h2>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 font-poppins'>

                <div className='hover:text-gray-600 bg-white p-10 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out space-y-3'>
                    <FaTextHeight data-aos-duration="500" data-aos="fade-left"
                        size={40}></FaTextHeight>
                    <h3 className='text-2xl font-bold mt-4'>Text to PDF</h3>
                    <p>Here you can add a text file for your kind edit the document. Enjoy the functionality we improved there.</p>
                </div>

                <div className='hover:text-gray-600 bg-white p-10 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out space-y-3'>
                    <FaSave data-aos-duration="500" data-aos="fade-left" size={40}></FaSave>
                    <h3 className='text-2xl mt-4 font-bold'>Auto save system</h3>
                    <p>When you edit your documents here, you found autosave functionality here. Enjoy this feature.</p>
                </div>
                <div className='hover:text-gray-600 bg-white p-10 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out space-y-3'>
                    <FaImage data-aos-duration="500" data-aos="fade-left" size={40}></FaImage>
                    <h3 className='text-2xl font-bold mt-4'>Image to PDF</h3>
                    <p>Add image here to make your pdf version. We implement this functionality. Enjoy</p>
                </div>
                <div className='hover:text-gray-600 bg-white p-10 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out space-y-3'>
                    <BiTime data-aos-duration="500" data-aos="fade-left" size={40}></BiTime>
                    <h3 className='text-2xl mt-4 font-bold'>Real Time Management</h3>
                    <p>We implement real-time collaboration here. For checking updated data here for productivity.</p>
                </div>
                <div className='hover:text-gray-600 bg-white p-10 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out space-y-3'>
                    <FaDesktop data-aos-duration="500" data-aos="fade-left" size={40}></FaDesktop>
                    <h3 className='text-2xl font-bold mt-4'>Drop your file from PC</h3>
                    <p>Drag and drop your file here from your computer and enjoy the environment you want here.</p>
                </div>
                <div className='hover:text-gray-600 bg-white p-10 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out space-y-3'>
                    <FaFileAlt data-aos-duration="500" data-aos="fade-left" size={40}></FaFileAlt>
                    <h3 className='text-2xl mt-4 font-bold'>Merge File Here</h3>
                    <p>Merge your documents here with a pre-made template and add your functionality with your choice without any hassle.</p>
                </div>
            </div>
        </div>
    );
};

export default ReadSection;