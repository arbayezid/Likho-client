import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleDemo = () => {
    const seeDemo = useLoaderData();
    const { id } = useParams();
    
    const [demoPage, setDemoPage] = useState([]);

    useEffect(() => {
        fetch(`https://likho-backend-himlaoy.vercel.app/demo/${seeDemo?._id}`)
            .then(res => res.json())
            .then(data => setDemoPage(data))
    }, [seeDemo?._id]);
     console.log(demoPage);
    return (
        <div className='text-center'>
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Here is the single demo detail for {demoPage?.id} {demoPage?.f_name}</h2>

            {/* Card Design */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img src={demoPage?.img} alt={demoPage?.f_name} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{demoPage?.f_name}</div>
                    <p className="text-gray-700 text-base">{demoPage?.work_procedure}</p>
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-900 text-base">{demoPage?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleDemo;