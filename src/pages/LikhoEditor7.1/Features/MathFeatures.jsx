import React from 'react';
import Container from '../../shared/Container';
import Math from './Math';


const MathFeatures = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 lg:pb-0 pb-5">
                <div className="lg:space-x-4 md:space-x-2 mx-4 lg:mx-64 font-roboto items-center justify-evenly">
                    <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col md:items-center md:space-y-4 relative">
                        <div className="space-y-5 mb-7 lg:mb-0 relative">
                            <h1 className="text-3xl md:text-5xl font-roboto text-white relative z-10">
                                Math equations<br />
                                <span className="text-lime-300">made easy</span>
                            </h1>
                            <p className="text-gray-200 relative z-10">
                                Write math equations and chemical formulas with MathType on <br /> your web platform.
                            </p>
                            {/* Create corner stands in top-left and bottom-right corners */}
                            <div className="absolute top-28 left-16 bottom-6 w-4 radio-xs h-4 bg-gradient-to-tr from-purple-800 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-bl from-purple-800 to-transparent"></div>
                        </div>
                        <img
                            className="h-auto md:h-3/5 mx-auto"
                            src="https://i.ibb.co/0DMBw29/image.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>


            {/* others side ...  */}


            <Container>
                <div className="font-poppins mt-16">

                    <h2 className='text-center text-blue-950 text-4xl font-semibold '>MathType is now integrated with Likho Editor <br />
                        enabling users  to create quality math equations</h2>

                    <div className="grid grid-cols-2 items-center justify-center border-b-2 lg:px-28">

                        <div className="space-y-4">
                            <h4 className='text-2xl font-semibold text-blue-950'>Boost your productivity</h4>


                            <div className="px-4 space-y-3">
                                <li>Easily fill your documents with math equations.</li>
                                <li>Be fast and efficient.</li>
                                <li>Hand write equations on a tablet and have them  quickly changed .</li>
                                <li>Simple numbering of equations.</li>
                                <li>Various fonts and colors available.</li>

                            </div>

                        </div>

                        {/*  */}


                        <img
                            className="h-auto md:h-3/5 mx-auto"
                            src="https://i.ibb.co/WgCVg9W/image.png"
                            alt=""
                        />
                    </div>

                    {/* section 3 */}
                    <div className="grid grid-cols-2 items-center justify-center border-b-2 lg:px-28">

                        <img
                            className="h-auto md:h-3/5 mx-auto"
                            src="https://i.ibb.co/m60MwN8/image.png"
                            alt=""
                        />


                        <div className="space-y-4">
                            <h4 className='text-2xl font-semibold text-blue-950'>Accessibility</h4>


                            <div className="px-4 space-y-3">
                                <li>Offers adequate mathematical notation depending on the culture.</li>
                                <li>Supports different education levels.</li>
                                <li>Keyboard-only editing of formulas available.</li>
                                <li>Reading equations with screen-reader.</li>


                            </div>

                        </div>

                        {/*  */}



                    </div>
                    {/* section 4 */}

                    <div className="grid grid-cols-2 items-center justify-center border-b-2 lg:px-28">




                        <div className="space-y-4">
                            <h4 className='text-2xl font-semibold text-blue-950'>Work as you like</h4>


                            <div className="px-4 space-y-3">
                                <li>Supports different education levels.</li>
                                <li>Offers adequate mathematical notation depending on the culture.</li>
                                <li>Keyboard-only editing of formulas available.</li>
                                <li>Reading equations with screen-reader.</li>


                            </div>

                        </div>

                        {/*  */}


                        <img
                            className="h-auto md:h-3/5 mx-auto"
                            src="https://i.ibb.co/19yjScc/image.png"
                            alt=""
                        />
                    </div>

                </div>
            </Container>

            <div className="bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 justify-center items-center lg:p-10 mx-auto ">
                <div className=" flex justify-center items-center h-1/2">
                    <Container>
                        <Math />
                    </Container>
                </div>
            </div>



        </div>
    );
};

export default MathFeatures;