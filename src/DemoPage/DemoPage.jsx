import React, { useEffect, useState } from 'react';
import './DemoPage.css';
import { Link } from 'react-router-dom';

const DemoPage = () => {
    const [demoPage, setDemoPage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/demo`)
            .then(res => res.json())
            .then(data => setDemoPage(data))
    }, []);


    return (
        <div>
            {/* demo banner */}
            <div className='demodiv md:h-80 lg:h-80 h-96  w-full flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    <div className="flex flex-col justify-center md:p-14 lg:p-14 p-5">
                        <h2 className='text-6xl font-bold text-white'><span className='text-yellow-400 '>Likho Editor</span> Demo Pages</h2>
                        <p className='text-white text-xl mt-4'>
                            It’s easy to configure, customize, and control every aspect of the look, feel, and functionality of CKEditor. This page provides just a glimpse of the endless possibilities that CKEditor offers. Build anything imaginable with limitless customization.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>

            {/* demo card customize */}
            <div className='mt-10 mb-10 p-5 md:p-10 lg:p-10  gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {demoPage.map((item) => (
                    <div key={item.id} className=" bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:translate-x-3 border border-gray-300 p-4 mb-4">
                        <img className="w-full h-60 object-cover rounded shadow-xl" src={item.img} alt="Image Alt Text" />
                        <div className="px-4 py-4">
                            <div className="font-bold text-3xl mb-2 text-slate-600">{item.f_name}</div>
                            <p className="text-gray-700 text-xl ">{item.description}</p>
                        </div>
                        <div className="px-4 py-2 border-t border-gray-300">
                            <Link to={`/demopage/${item?._id}`}>
                                <button className="bg-white btn-lg hover:bg-blue-500 text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded-lg transition duration-300 hover:text-white hover:border-transparent">
                                    See Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoPage;