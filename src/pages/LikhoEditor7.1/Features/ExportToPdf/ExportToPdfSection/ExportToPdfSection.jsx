import React from 'react';

const ExportToPdfSection = () => {
    return (
        <div className='py-12'>
            <div className='flex justify-around  items-center'>
                <div>
                    <img className='h-[320px] w-[400px]' src="https://i.ibb.co/ypFgh8p/global-export-to-word-411f9d6337.webp" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl text-black font-bold'>Export to Word</h1>
                    <ol className='py-6 '>
                        <li className='pb-4 text-xl'>1.Set the document’s header and footer.</li>
                        <li className='pb-4 text-xl'>2.Insert page breaks, embed images and use any font you like.</li>
                        <li className='text-xl'>3.Ready-to-use with CKEditor 5 and CKEditor 4 as a premium plugin.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ExportToPdfSection;