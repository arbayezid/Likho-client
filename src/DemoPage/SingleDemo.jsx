// import React from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const SingleDemo = () => {
//     const seeDemo = useLoaderData();
//     const {id, f_name, work_procedure, img, description} = seeDemo;

//     return (
//         <div>
//             <h2>here is single demo detail coming {seeDemo.length}</h2>

//             {/* here card details */}

//         </div>
//     );
// };

// export default SingleDemo;

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const SingleDemo = () => {
//     const seeDemo = useLoaderData();
//     const { f_name, work_procedure, img, description } = seeDemo;

//     return (
//         <div>
//             <h2 className="text-3xl font-bold text-indigo-600 mb-4">Here is the single demo detail for </h2>
            

//             {/* Unique Card Design */}
            
//         </div>
//     );
// };

// export default SingleDemo;


import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleDemo = () => {
    const seeDemo = useLoaderData();
    const {id} = useParams();
    console.log(id);
    const { f_name, work_procedure, img, description } = seeDemo;
    console.log(seeDemo);
    // console.log(img);
    return (
        <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Here is the single demo detail for {id} {f_name}</h2>

            {/* Card Design */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={img} alt={f_name} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{f_name}</div>
                    <p className="text-gray-700 text-base">{work_procedure}</p>
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-900 text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleDemo;