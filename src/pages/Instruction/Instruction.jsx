import React from 'react';
import Container from '../shared/Container';
import { FaCheckCircle } from 'react-icons/fa';

const Instruction = () => {
    return (
        <Container>
            <div className='mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center space-x-16 font-poppins'>
            <div>
                <h2 className='text-4xl text-blue-950 font-bold'>How to Edit PDF Online</h2>
                <div className="">
                <p className='mt-5 text-xl text-gray-700 font-semibold pb-5'>
                    Follow this easy steps to edit a pdf online by adding documents.There are some instruction for you.
                </p>

                
                <p className='mt-5 font-semibold text-slate-800 flex gap-5 r'>
                    <span className='text-xl font-bold'><FaCheckCircle className='text-green-600 text-3xl'/>  </span>Choose a pdf to edit by clicking the select a file button avobe, or drag and drop a file into the drop zone.
                </p>

                <p className='mt-5 font-semibold flex gap-5 text-slate-800'>
                <span className='text-xl font-bold'><FaCheckCircle className='text-green-600 text-3xl'/>  </span>When upload the file , sign in to edit your documents in our editor.
                </p>
                <p className='mt-5 font-semibold flex gap-5 text-slate-800 '>
                <span className='text-xl font-bold'><FaCheckCircle className='text-green-600 text-3xl'/>  </span>Use the toolbar to add text, sticky notes, highlights, drawing and more.
                </p>
                <p className='mt-5 font-semibold text-slate-800 flex gap-5'>
                <span className='text-xl text-slate-800 font-bold'><FaCheckCircle className='text-green-600 text-3xl'/>  </span> Download your edited file and get a link to share it.
                </p>
                </div>
            </div>
            <div className=''>
                <img className=' rounded-lg' src="https://i.ibb.co/bRRQBZL/Document-Localization-01.png" alt="" />
            </div>

        </div>
        </Container>
    );
};

export default Instruction;