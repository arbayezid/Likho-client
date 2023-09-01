import React, { useState, useEffect } from 'react';

import { FaBookOpen, FaChevronRight, FaFileArchive, } from 'react-icons/fa';
import { BiSolidMessageDots, BiSolidMessageEdit } from 'react-icons/bi';
import Container from '../../shared/Container';

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

    <div className="bg-gray-100 p-20">
      <Container>


        <div className="flex">
          {/* Left side */}

          <div className="space-y-3 mb-6">
            <h2 className='text-blue-700 font-bold text-xl'>Produces</h2>
            <h4 className='text-blue-950 font-bold text-4xl '>Every Essential Tool Prepared <br /> <span className='text-blue-600 font-bold text-4xl'>ready for production</span></h4>
            <p>Build with Remarkable Speed, All While Maintaining Complete Flexibility and Control.</p>

            <div className="w-full  p-4 space-y-3">
              {pointsData.map((point) => (
                <div
                  key={point._id}
                  className={`p-3 px-5 cursor-pointer hover:border-2 border-blue-200 hover:bg-gray-200 rounded-xl ${selectedPoint === point._id
                    ? 'border-x-2 border-blue-400 bg-white'
                    : 'hover:bg-white border-blue-200'
                    }`}
                  onClick={() => setSelectedPoint(point._id)}
                >



                  <div className="space-y-2 py-2 text-lg font-sans">
                    <h2 className="font-bold text-blue-950">{point.title}</h2>
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
          <div className="w-1/2 p-4">
            {pointsData.map((point) =>
              selectedPoint === point._id && (
                <div key={point._id}>
                  <img
                    src={point.image}
                    alt={`Point ${point.title}`}
                    className="w-full mx-8 h-[780px] border-1 rounded-xl"
                  />

                  <a href={point.learnMoreLink} className="text-blue-600">

                  </a>
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
