import { useState } from "react";
import Templates from "../Template/Templates";
import Container from "../shared/Container";
import { useEffect } from "react";
import DemoTemplates from "./DemoTemplates";
import useTemplates from "../../hooks/useTemplates";

const TemplatesDemo = () => {
    const [templates] = useTemplates();

    return (
        <div>

            {/* Templates banner */}
            <div className="relative bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 font-poppins lg:pb-0 pb-5">
                <div className="lg:space-x-4 md:space-x-20 mx-4 lg:mx-20   items-center">


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-20 lg:space-x-52 2xl:space-x-72 items-center lg:p-20 relative pt-5">
                        <div className="space-y-5 mb-7 lg:mb-0 relative">
                            <h1 className="text-3xl md:text-4xl text-white relative z-10">
                                100+ Premium Templates Print, Mail, Download PDF
                                <span className="text-lime-300"> Likho</span> Invoice
                            </h1>
                            <p className="text-gray-200 relative z-10">
                                Likho Invoice offers a gallery of Premium templates. Create and send professional invoices in just 2 minutes, with fully customizable templates from Likho. Try for PREMIUM. Customize your invoices
                            </p>

                            <div className="absolute top-28 left-16 bottom-6 w-4 radio-xs h-4 bg-gradient-to-tr from-purple-800 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-bl from-purple-800 to-transparent"></div>
                        </div>

                        <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
                            <img
                                className="h-auto w-full md:h-3/4 mx-auto"
                                src="https://i.ibb.co/181SS1L/image.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Templates banner finish */}

            {/* Templates Demo Roll Section */}
            <div className="font-poppins lg:mt-20 space-y-6 lg:mb-16 mt-8 mb-8">

                <h1 className="text-blue-950 lg:text-4xl text-center font-semibold">Premium Templates</h1>
                <p className="text-gray-700 text-center">Customizable templates ensure consistent document structures. Define full or partial templates to apply and maintain.</p>

                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {templates.map((template) => (
                            <DemoTemplates key={template._id} template={template} />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default TemplatesDemo;
