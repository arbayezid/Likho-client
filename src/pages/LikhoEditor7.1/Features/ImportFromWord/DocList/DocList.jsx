import React from 'react';
import { Link } from 'react-router-dom';

const DocList = () => {
    return (
        <div className='py-12'>
            <div className='flex justify-evenly  items-center'>              
                <div className='md:w-[600px]'>
                    <h1 className='text-3xl text-black font-bold'>High-performer with top quality HTML</h1>
                    <ol className='py-6 '>
                        <li className='pb-4 text-xl'>1.Supports DOCX (Word) and DOTX (Word Template) file formats.</li>
                        <li className='pb-4 text-xl'>2.Unlike most popular converters, produces high quality semantic HTML from the not-so-perfect DOCX structure.</li>
                        <li className='text-xl pb-4'>3.Converting large documents in less than a second.</li>
                        <li className='text-xl'>4.Document migration can be entirely done on the backend thanks to REST API.</li>
                    </ol>
                    <Link to="/">
                                    <button className="text-lg font-poppins px-4 bg-lime-600 text-center text-white p-2 rounded-lg">
                                       Read Docs
                                    </button>
                                </Link>
                </div>
                <div>
                    <img className='h-[320px] w-[400px]' src="https://i.ibb.co/j4Tr1f6/import-lp-blade-2-a1ca1b8e83.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DocList;