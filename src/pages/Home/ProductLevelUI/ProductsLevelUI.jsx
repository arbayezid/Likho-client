import React, { useState, useEffect } from 'react';

import { FaBookOpen, FaChevronRight, FaFileArchive, } from 'react-icons/fa';
import { BiSolidMessageDots, BiSolidMessageEdit } from 'react-icons/bi';
import Container from '../../shared/Container';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductsLevelUI = () => {
  const [selectedPoint, setSelectedPoint] = useState(1);
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        setPointsData(data);
        setSelectedPoint(data[0]._id); // Set selectedPoint to the _id of the first item
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (

    <div className="bg-gray-100 lg:p-20 font-poppins">
      <Container>

        <div className="mb-10 space-y-5">
          <h2
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="text-blue-700 font-bold text-xl pt-10"
          >
            Produces
          </h2>



          <h4
            data-aos="fade-right"
            data-aos-duration="3000"
            className="text-blue-950 font-bold text-4xl "
          >
            Every Essential Tool Prepared <br /> ready for production
          </h4>

          <p className="">
            Build with Remarkable Speed, All While Maintaining Complete
            Flexibility and Control.
          </p>
        </div>


        {/* Conditionally render Carousel on mobile devices */}
        <div className="lg:hidden items-center justify-center">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch
          >
            {pointsData.map((point) => (
              <div key={point._id}>
                {/* Content for each slide */}
                <div
                  className={`p-3 px-5 cursor-pointer border-orange-500 hover:bg-gray-200 rounded-xl ${selectedPoint === point._id
                    ? 'border-x-8 border-blue-400 bg-white'
                    : 'hover:bg-white border-blue-200'
                    }`}
                  onClick={() => setSelectedPoint(point._id)}
                >
                  <div className="space-y-2 shadow-xl shadow-violet-800 text-lg font-sans border-gray-400 bg-gray-200 p-3 px-4 py-4 rounded-2xl">
                    <h2 className="font-bold text-gray-800">{point.title}</h2>
                    <p className="text-gray-700">{point.description}</p>
                    <p className="flex items-center gap-2 text-blue-800 font-bold text-xs">
                      Learn More <FaChevronRight className="text-xs" />
                    </p>
                  </div>
                </div>

                {/* Right side */}
                <div className="w-full h-1/2 p-4">
                  {/* Move this outside of the Carousel */}
                  {selectedPoint === point._id && (
                    <div>
                      <img
                        src={point.image}
                        alt={`Point ${point.title}`}
                        className="w-1/2 lg:mx-8 h-auto items-center border-1 rounded-xl"
                      />
                      <a href={point.learnMoreLink} className="text-blue-600"></a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 items-center justify-center">
          {/* Left side */}

          <div className="space-y-3 mb-6 md:w-auto lg:w-full xl:w-full sm:block hidden">
            {/* Your content */}
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="w-full space-y-2 md:w-auto"
            >
              {pointsData.map((point) => (
                <div
                  key={point._id}
                  className={`p-3 px-5 cursor-pointer border-orange-500 hover:bg-gray-200 rounded-xl ${selectedPoint === point._id
                    ? 'border-x-8 border-blue-400 bg-white'
                    : 'hover:bg-white border-blue-200'
                    }`}
                  onClick={() => setSelectedPoint(point._id)}
                >
                  <div className="space-y-2 shadow-xl shadow-gray-500 text-lg font-sans border-gray-400 bg-gray-200 p-3 px-4 py-4 rounded-2xl">
                    <h2 className="font-bold text-gray-800">{point.title}</h2>
                    <p className="text-gray-700">{point.description}</p>
                    <p className="flex items-center gap-2 text-blue-800 font-bold text-xs">
                      Learn More <FaChevronRight className="text-xs" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="w p-4 sm:block hidden">
            {pointsData.map((point) =>
              selectedPoint === point._id && (
                <div key={point._id}>
                  <img
                    src={point.image}
                    alt={`Point ${point.title}`}
                    className="w-full lg:mx-8 h-auto items-center border-1 rounded-xl"
                  />

                  <a href={point.learnMoreLink} className="text-blue-600"></a>
                </div>
              )
            )}
          </div>
        </div>
      </Container>

    </div>

  );
};

export default ProductsLevelUI;
