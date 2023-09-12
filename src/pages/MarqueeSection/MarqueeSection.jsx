import React from 'react';
import Marquee from 'react-fast-marquee';


const MarqueeSection = () => {
    return (
        <div className=' bg-gray-100 pb-20'>
            <p className='text-center text-4xl text-blue-950 font-bold pt-20'>Locate Your File</p>
            <Marquee speed={100}  className='mt-12'>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/6FRmks0/png-transparent-directory-icon-folder-miscellaneous-angle-rectangle-thumbnail.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>Folder</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/qsM8CM4/Google-Drive-icon-2020-svg.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>Drive</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/6RBC1Ks/Dropbox-Icon-svg.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>Dropbox</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/nkhWGMM/cloud.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>OneCloud</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/wr6Hmr8/doc.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>Word</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/S0YgBy5/doc2.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>Docs</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/6sXqBrH/PDF-file-icon-svg.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>PDF</p>
                </div>
                <div className='mx-20'>
                    <img src="https://i.ibb.co/SnR7qML/PPT-Logo-PNG-Pic.png" alt="Logo" className="h-16" />
                    <p className='text-xl text-center mt-2'>PPTX</p>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeSection;