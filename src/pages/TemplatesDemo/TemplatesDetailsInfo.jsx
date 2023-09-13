import { FaChevronDown } from "react-icons/fa";
import Container from "../shared/Container";
import { Link } from "react-router-dom";


const TemplatesDetailsInfo = ({ templateInfo }) => {
    const { title, short_description, image, img_1, img_2, description, sub_description } = templateInfo;


    return (

        <div className="font-poppins">

            {/* Banner Design */}
            <div className="relative bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 lg:pb-0 pb-5">
                <div className="lg:space-x-4 md:space-x-2 mx-4 lg:mx-64 font-roboto items-center justify-evenly">
                    <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col md:items-center md:space-y-4 relative">
                        <div className="space-y-5 mb-7 lg:mb-0 relative">
                            
                            <h1 className="text-3xl md:text-5xl font-roboto text-white relative z-10">
                                {title}
                            </h1>
                            <p className="text-gray-200 relative z-10">
                                {short_description}
                            </p>

                            <Link to={`/docs`}><button className="text-lg font-poppins px-4 bg-blue-200 mt-5 hover:bg-white text-center text-blue-950 font-semibold p-2 rounded-lg">Access Template</button></Link>

                            {/* Create corner stands in top-left and bottom-right corners */}
                            <div className="absolute top-28 left-16 bottom-6 w-4 radio-xs h-4 bg-gradient-to-tr from-purple-800 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-bl from-purple-800 to-transparent"></div>
                        </div>

                        <img
                            className="h-auto md:h-3/5 mx-auto"
                            src={img_1}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* banner finished */}

            <p className="text-blue-600 flex items-center gap-3 px-16 mt-5 text-base font-poppins">View Info <FaChevronDown /></p>

            <Container>

                <div className="grid grid-cols-2 justify-center items-center pt-8 lg:px-44">

                    <img className="w-3/4 h-3/4" src={image} alt="" />

                    <div className=" space-y-12">
                        <h2 className="text-blue-950 text-4xl font-semibold">Let your users access informative templates</h2>
                        <p className="text-gray-800">{description}</p>

                    </div>


                </div>

                <p className="border-b-2"></p>




                <div className="grid grid-cols-2 justify-center items-center pt-8 lg:px-44">

                   

                    <div className=" space-y-12">
                        <h2 className="text-blue-950 text-4xl font-semibold">Let your users access informative templates</h2>
                        <p className="text-gray-800">{sub_description}</p>

                    </div>

                    <img className="w-3/4 h-3/4" src={image} alt="" />


                </div>


            </Container>





        </div>

    );
};

export default TemplatesDetailsInfo;