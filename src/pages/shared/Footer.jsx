import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-50 p-8 font-poppins">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/4 mb-8 space-y-4">
                    <div className="flex text-gray-800 items-center gap-4 ">
                        <img src='https://i.ibb.co/h2n597p/linksys-logo-freelogovectors-net.webp' alt="logo" className="md:cursor-pointer h-10" />
                        <Link to='/'><h1 className="font-semibold font-poppins ">LikhoEditor</h1></Link>
                    </div>
                    <p>Create, collaborate, and streamline your documents effortlessly with Likho Docs.</p>
                </div>
                <div className="w-full  lg:w-1/4 mb-8">
                    <h4 className="text-xl mb-4">Product</h4>
                    <ul className="text-gray-900">
                        <li><a className="text-gray-800 hover:text-white">Features</a></li>
                        <li><a className="text-gray-800 hover:text-white">Pricing</a></li>
                        <li><a className="text-gray-800 hover:text-white">Marketing</a></li>
                        <li><a className="text-gray-800 hover:text-white">Advertisement</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 mb-8">
                    <h4 className="text-xl mb-4">Solutions</h4>
                    <ul>
                        <li><a className="text-gray-800 hover:text-white">Overview</a></li>
                        <li><a className="text-gray-800 hover:text-white">Tech</a></li>
                        <li><a className="text-gray-800 hover:text-white">Government</a></li>
                        <li><a className="text-gray-800 hover:text-white">Non-Profit</a></li>
                        <li><a className="text-gray-800 hover:text-white">Financial Services</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 mb-8">
                    <h4 className="text-xl mb-4">Customers</h4>
                    <ul>
                        <li><a className="text-gray-800 hover:text-white">Highlights</a></li>
                        <li><a className=" hover:text-white">Case Studies</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-600 pt-6 mt-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-sm ">
                        &copy; {currentYear} Likho Editor. All rights reserved.
                    </div>
                    <div>
                        <a className=" hover:text-white mx-2" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="text-gray-800 hover:text-white mx-2" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-gray-800 hover:text-white mx-2" href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
