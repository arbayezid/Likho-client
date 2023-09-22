import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../shared/Container';

const ExportPdfBanner = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 max-w-full p-4">

                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 font-poppins items-center justify-center lg:space-x-20 pt-10 mx-auto gap-4">

                        {/* left front side */}
                        <div className="text-center lg:text-left space-y-5">

                            <h2 className="text-2xl lg:text-4xl font-poppins text-white font-semibold mb-4 lg:mb-0">
                                <span className="text-lime-400">Export </span> To PDF and Word 
                            </h2>

                            <p className="text-white">
                            Create document content and easily save it as a PDF or Word file.
                            </p>

                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <Link to="/">
                                    <button className="text-lg font-poppins px-4 bg-lime-600 text-center text-white p-2 rounded-lg">
                                        Try Demo
                                    </button>
                                </Link>

                                <button className="text-xl font-poppins px-4 hover:bg-blue-100 text-center text-purple-700 bg-white  border border-gray-500 p-2 rounded-lg">
                                    Docs Know
                                </button>
                            </div>
                        </div>

                        {/* right side */}
                        <div className="text-center">
                            <img className="h-auto max-w-full lg:h-3/4" src="https://i.ibb.co/WG4VnXD/word-To-Pdf.png" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ExportPdfBanner;