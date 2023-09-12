import React from 'react';
import FeaturesDrawer from './FeaturesDrawer';
import Container from '../../shared/Container';

const Features = () => {
  return (
    <div className="">


      <div className="relative bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 lg:pb-0 pb-5">
        <div className="lg:space-x-4 md:space-x-2 mx-4 lg:mx-64 font-roboto items-center justify-evenly">
          <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col md:items-center md:space-y-4 relative">
            <div className="space-y-5 mb-7 lg:mb-0 relative">
              <h1 className="text-3xl md:text-5xl font-roboto text-white relative z-10">
                Likho Editor 7.1 <br />
                <span className="text-lime-300">Features Overview</span>
              </h1>
              <p className="text-gray-200 relative z-10">
                Likho Editor offers a wide range of features, including auto
                <br />formatting, paste from Word, and mentions, as well as premium
                <br />plugins such as Track Changes, Revision History, and Real-time
                <br />Collaboration.
              </p>
              {/* Create corner stands in top-left and bottom-right corners */}
              <div className="absolute top-28 left-16 bottom-6 w-4 radio-xs h-4 bg-gradient-to-tr from-purple-800 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-bl from-purple-800 to-transparent"></div>
            </div>
            <img
              className="h-auto md:h-3/5 mx-auto"
              src="https://i.ibb.co/GWN8jLQ/features-banner-43451acc6e-1.webp"
              alt=""
            />
          </div>
        </div>
      </div>




      {/*  */}

      <Container>
        <div className="drawer lg:drawer-open mb-20 ">

          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col  bg-gradient-to-r from-gray-900 via-purple-950 to-purple-900 lg:mt-20 rounded-2xl ">
            {/* Page content here */}


            {/* Drawer Content start */}
            <FeaturesDrawer></FeaturesDrawer>



            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          </div>



          <div className="drawer-side lg:mt-20 lg:mx-20 rounded-2xl ">
            <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full text-base-content bg-slate-100 pt-14 font-roboto">
              {/* Sidebar content here */}
              <h4 className='text-xl font-semibold font-roboto text-blue-950 px-4  mb-5'>Ultra Features</h4>
              <div className="text-gray-600 font-normal">
                <li><a>Comments</a></li>
                <li className=" hover:text-purple-500"><a>Revision History</a></li>
                <li><a>Real-time Collaboration</a></li>
                <li><a>Import from Word</a></li>
                <li><a>Export to PDF and Word</a></li>
                <li><a>Spell and grammar check</a></li>
                <li><a>Pagination</a></li>
                <li><a>Pagination</a></li>
                <li><a>Math equations</a></li>
              </div>

              <h4 className='text-xl font-semibold font-[Poppins] text-blue-950 px-4  mb-5 mt-5'>Pro Features</h4>
              <li><a>Templates</a></li>
              <li><a>Document Outline</a></li>
              <li><a>Math equations</a></li>
            </ul>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;