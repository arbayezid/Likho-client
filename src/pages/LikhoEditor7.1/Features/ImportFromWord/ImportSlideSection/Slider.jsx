import React from 'react';
import Marquee from 'react-fast-marquee';
import WordContactSection from '../WordContactSeciton/WordContactSection';

const Slider = () => {
    return (
        <div className='  py-10'>
            <h1 className='text-center text-3xl text-[#2b383d] font-bold font-poppins pt-6'>Trusted and approved by</h1>
            <Marquee speed={100}  className='my-12'>
                <div className='md:mx-20 mx-10'>
                    <img src="https://i.ibb.co/6FRmks0/png-transparent-directory-icon-folder-miscellaneous-angle-rectangle-thumbnail.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>Folder</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/qsM8CM4/Google-Drive-icon-2020-svg.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>Drive</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/6RBC1Ks/Dropbox-Icon-svg.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>Dropbox</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/nkhWGMM/cloud.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2 text-[#65A30D]'>OneCloud</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/wr6Hmr8/doc.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>Word</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/S0YgBy5/doc2.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>Docs</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/6sXqBrH/PDF-file-icon-svg.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>PDF</p>
                </div>
                <div className='md:mx-20 mx-3'>
                    <img src="https://i.ibb.co/SnR7qML/PPT-Logo-PNG-Pic.png" alt="Logo" className="h-10" />
                    <p className='text-xl text-center mt-2'>PPTX</p>
                </div>
            </Marquee>
            <WordContactSection></WordContactSection>
        </div>
    );
};

export default Slider;