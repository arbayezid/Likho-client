import { Link } from "react-router-dom";
import Container from "../shared/Container";
import React, { useState } from "react";

const DemoTemplates = ({ template }) => {
    const { _id, image, description, title } = template;
    const slicedDescription = description.slice(0, 150);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <div
                    className={`bg-gray-200 rounded-2xl justify-center hover:h-full hover:w-full h-1/2 w-1/2 ${isHovered ? "transform scale-105 transition-transform" : ""
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img className="p-4 hover:w-full hover:h-full h-96" src={image} alt="" />
                </div>
            </figure>

            <div className="card-body">
                <h2 className="card-title text-blue-950">{title}</h2>
                <p className="text-gray-700">{slicedDescription}..</p>
                <div className="card-actions">
                    <Link to={`/templatesdetails/${_id}`}>
                        <button className="text-lg font-poppins px-4 bg-blue-200 mt-5 hover:bg-purple-600 hover:text-white text-center text-blue-950 font-semibold p-2 rounded-lg">
                            Try Demo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DemoTemplates;
