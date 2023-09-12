import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FaChevronDown, FaSortDown } from "react-icons/fa";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, linkIndex) => (
        <div key={linkIndex}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <div className="flex font-poppins justify-center items-center gap-2">
                <span className=" font-semibold">{link.name}</span>
                <span className="text-purple-500">
                  <FaSortDown className="text-xl" name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`} />
                </span>
              </div>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks, mysublinksIndex) => (
                      <div key={mysublinksIndex}>
                        <h1 className="font-poppins text-purple-500 font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, subindex) => (
                          <li key={subindex} className="text-sm text-gray-600 my-2.5">
                            <div className="flex items-center gap-5  rounded-lg hover:bg-purple-100 p-3">
                              {slink.icon && (
                                <span className="text-gray-700  text-lg  ">
                                  {slink.icon}
                                </span>
                              )}
                              <Link
                                to={slink.link}
                                className=" text-blue-950 font-semibold"
                              >
                                {slink.name}
                              </Link>
                            </div>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${
              heading === link.name ? "md:hidden" : "hidden"
            }`}
          >
            {link.sublinks.map((slinks, slinksIndex) => (
              <div key={slinksIndex}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-lg">{slinks.Head}</span>
                      <span className="text-purple-500">
                        <FaSortDown className="text-base" name={`${
                          subHeading === slinks.Head ? "chevron-up" : "chevron-down"
                        }`} />
                      </span>
                    </div>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, slinkIndex) => (
                      <li key={slinkIndex} className="py-3 pl-14">
                        <div className="flex items-center gap-5">
                          {slink.icon && (
                            <span className="text-amber-800">
                              {slink.icon}
                            </span>
                          )}
                          <Link to={slink.link}>{slink.name}</Link>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;