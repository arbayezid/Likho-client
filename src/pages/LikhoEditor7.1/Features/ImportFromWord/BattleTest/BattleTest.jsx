import React from 'react';
import { Link } from 'react-router-dom';

const BattleTest = () => {
    return (
        <div className='py-16 border'>
            <div className='md:flex justify-around items-center'>
                <div>
                <iframe width="500" height="315" src="https://www.youtube.com/embed/xGxa5yEo_ZE?si=eW6iWNtclyOpsrrg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <h1 className='text-3xl text-black font-bold'>The best in-class and battle-tested</h1>
                    <ol className='py-6 '>
                        <li className='pb-4 text-xl'>1.Supports Comments and Track Changes features with text suggestions .</li>
                        <li className='pb-4 text-xl'>2.Verified on thousands of real documents gathered over the last 15+ years</li>
                        <li className='text-xl pb-4'>3.Preserves 99% of the Word styling.</li>
                        <li className='text-xl'>3.Fully compatible with CKEditor.</li>
                    </ol>
                    <Link to="/">
                                    <button className="text-lg font-poppins px-4 bg-lime-600 text-center text-white p-2 rounded-lg">
                                        Contact Us
                                    </button>
                                </Link>
                </div>
            </div>
        </div>
    );
};

export default BattleTest;