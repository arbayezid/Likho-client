import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../shared/Container';

const WordBanner = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 max-w-full p-4">

                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 font-poppins items-center justify-center lg:space-x-20 pt-10 mx-auto gap-4">

                        {/* left front side */}
                        <div className="text-center lg:text-left space-y-5">

                            <h2 className="text-2xl lg:text-4xl font-poppins text-white font-semibold mb-4 lg:mb-0">
                                <span className="text-lime-400">Import </span>  from Word
                            </h2>

                            <p className="text-white">
                                Quickly import any amount of Word documents to LIKHO editor .
                            </p>

                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <Link to="/">
                                    <button className="text-lg font-poppins px-4 bg-lime-600 text-center text-white p-2 rounded-lg">
                                        Try Demo
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* right side */}
                        <div className="text-center md:py-6">
                            <img className="h-auto max-w-full lg:h-3/4" src="https://i.ibb.co/m05msVg/import-lp-banner-651acfb878.webp" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WordBanner;