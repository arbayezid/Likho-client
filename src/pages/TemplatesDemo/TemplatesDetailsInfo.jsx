import { FaChevronDown } from "react-icons/fa";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const TemplatesDetailsInfo = ({ templateInfo }) => {
    const { _id, title, short_description, image, img_1, img_2, description, sub_description } = templateInfo;


    return (

        <div className="font-poppins pb-10">

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

                            <Link to={`/docs/${_id}`}><button className="text-lg font-poppins px-4 bg-blue-200 mt-5 hover:bg-white text-center text-blue-950 font-semibold p-2 rounded-lg">Access Template</button></Link>

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


            {/* React Tabs Use  */}


            <div className="justify-center flex items-center">
                <Tabs className="w-1/2">
                    <div className="justify-center text-center items-center"> {/* Center the text */}
                        <TabList className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 border-b-2 w-full border-gray-500">
                            <Tab className="border-b-4 p-2 text-center border-lime-300 border-transparent hover:border-lime-300">
                                Template Update
                            </Tab>
                            <Tab className="border-b-4 p-2 border-lime-300 border-transparent hover:border-lime-300">
                                Real-Time Collaboration
                            </Tab>
                            {/* Add more tabs here if needed */}
                            {/*   Up */}
                        </TabList>
                    </div>
                    
                    <p className="border-b-4"></p>
                    <TabPanel>
                        <h2>Template Update</h2>
                        <p>Here is information about template updates.</p>
                        {/* Add any other content or components related to this tab */}
                    </TabPanel>
                    <TabPanel>
                        <h2>Real-Time Collaboration</h2>
                        <p>Learn how to collaborate in real time.</p>
                        {/* Add any other content or components related to this tab */}
                    </TabPanel>
                </Tabs>
            </div>












            <Container>

                <div className="grid grid-cols-2 justify-center items-center pt-8 lg:px-44">

                    <img className="w-3/4 h-3/4" src={image} alt="" />

                    <div className=" space-y-12">
                        <h2 className="text-blue-950 text-4xl font-semibold">Let your users access informative templates</h2>
                        <p className="text-gray-800">{description}</p>

                    </div>


                </div>

                <p className="border-b-2"></p>




                <div className="grid grid-cols-2 justify-center gap-8 items-center pt-8 lg:px-44">



                    <div className=" space-y-12">
                        <h2 className="text-blue-950 text-4xl font-semibold">Can you provide more details about how to create a template and collaborate on it?</h2>
                        <p className="text-gray-800">{sub_description}</p>

                    </div>

                    <img className="w-full h-3/4" src={img_2} alt="" />


                </div>


            </Container>





        </div>

    );
};

export default TemplatesDetailsInfo;