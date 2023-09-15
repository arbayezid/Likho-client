import { useEffect, useState } from "react";
import Templates from "./Templates";
import Container from "../shared/Container";
import useTemplates from "../../hooks/useTemplates";


const TemplateSection = () => {
    const [templates] = useTemplates();
    const threeTemplates = templates.slice(0, 3);


    return (
        <div className="font-poppins lg:mt-20 space-y-6 lg:mb-16 mt-8 mb-8">

            <h1 className="text-blue-950 lg:text-4xl text-center font-semibold">Our Popular Templates</h1>
            <p className="text-gray-700 text-center">Customizable templates ensure consistent document structures. Define full or <br />partial templates to apply and maintain.</p>

            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {threeTemplates.map((template) => (
                        <Templates key={template._id} template={template} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default TemplateSection;