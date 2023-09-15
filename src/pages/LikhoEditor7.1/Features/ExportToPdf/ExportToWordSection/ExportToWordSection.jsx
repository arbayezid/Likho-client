import React from 'react';

const ExportToWordSection = () => {
    return (
        <div className='py-16 border'>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl text-black font-bold'>Export to Word</h1>
                    <ol className='py-6 '>
                        <li className='pb-4 text-xl'>1.Set the document’s header and footer.</li>
                        <li className='pb-4 text-xl'>2.Insert page breaks, embed images and use any font you like.</li>
                        <li className='text-xl'>3.Ready-to-use with CKEditor 5 and CKEditor 4 as a premium plugin.</li>
                    </ol>
                </div>
                <div>
                    <img className='h-[518px] w-[691px]' src="
https://i.ibb.co/3f6g1NS/global-export-to-pdf-f37377f20a.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExportToWordSection;