import { Link } from "react-router-dom";
import Container from "../shared/Container";
import React, { useState } from "react";

const Templates = ({ template }) => {
    const { _id, image, description, title } = template;
    const slicedDescription = description.slice(0, 100);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="font-poppins pt-8 space-y-5 w-full lg:w-4/5 lg:flex lg:flex-col lg:justify-start lg:items-start">
            <div
                className={`bg-gray-200 rounded-2xl justify-center ${isHovered ? "transform scale-105 transition-transform" : ""
                    }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className="p-4 h-auto  lg:h-96 w-full lg:w-96" src={image} alt="" />
            </div>
            <div className="space-y-5 px-2">
                <h2 className="lg:text-xl font-semibold text-blue-950 ">{title}</h2>
                <p className="text-gray-700">{slicedDescription}...</p>
                <div className="border-b-0">
                    <Link to={`/templatesdetails/${_id}`}>
                        <button className="border border-gray-400 text-base lg:text-lg font-poppins px-2 bg-blue-100 hover:bg-gray-200 text-purple-800 p-1 rounded-lg">
                            Try Demo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Templates;
