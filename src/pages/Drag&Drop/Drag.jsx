import React from 'react';

import { Button, Spin, Upload } from 'antd';
import banner from '../../pages/images/banner/banner2.jpg';
import wordIcon from '../../pages/images/banner/word_icon.png';

import styled, { css } from 'styled-components';
import TextAnimation from '../Mesbah/TextAnimation/TextAnimation';

import { FaUpload } from 'react-icons/fa';

const rotatingAnimation = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const RotatingImage = styled.img`
  ${rotatingAnimation}
  animation: rotate 4s linear infinite;
  border-radius: 10%;
`;

const Drag = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 font-poppins">
            {/* ... existing content ... */}

      <div
        className="absolute inset-0 bg-cover bg-center  lg:pt-20 h-[730px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-blue-800 opacity-70 z-0"
        style={{
          height: '70vh',
        }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col lg:pt-44 z-10 space-y-3 lg:space-y-28">
                {/* ... Your content ... */}


                <div className="sm:text-left lg:mx-4 xl:mx-28 ">
          <h6 className="text-3xl sm:text-5xl md:text-7xl md:px-10 text-gray-200 py-4 font-semibold px-3">
            Elevate Your Documents with LIKHOs <br /> Free Online Editing
          </h6>
          <p className="md:px-10 py-4 px-3">
            <TextAnimation />
          </p>
        </div>

        <div className="sm:pb-4 md:pb-8 lg:pb-14 font-poppins">
          <div className="z-10 bg-blue-200 p-4 rounded-lg mx-4 md:mx-auto md:w-[80%] lg:w-[50%]">
            <Upload.Dragger
              action="http://localhost:5176/"
              listType="picture"
              accept=".jpg, .jpeg, .doc"
              beforeUpload={(file) => {
                console.log({ file });
                return false;
              }}
              defaultFileList={[
                {
                  uid: 'abc',
                  name: 'existing file.png',
                  status: 'uploading',
                  url: 'https://barcelona.com',
                  percent: 50,
                },
              ]}
              iconRender={() => {
                return <Spin />;
              }}
              progress={{
                strokeWidth: 3,
                strokeColor: {
                  '0%': '#f0f',
                  '100%': '#ff0',
                },
                style: { top: 12 },
              }}
            >
              <div className="flex justify-center items-center mb-4">
                <RotatingImage className="w-12 h-14" src={wordIcon} alt="" />
              </div>
              <h4 className="lg:text-4xl md:text-3xl text-2xl text-blue-950 font-bold text-center font-poppins">
                Drag and drop document here to upload
              </h4>
              <br />



              <button className=" mb-4 border-1 shadow-md bg-purple-700 hover:bg-purple-800 font-poppins rounded-lg p-2 px-4 text-xs hover:animate-pulse font-semibold text-gray-200 transition-opacity duration-5000" >

                <div className="flex  gap-3 text-center items-center justify-center">
                  <FaUpload className='text-gray-300 text-xl ' />

                  <span>Click to Upload</span>
                </div>


              </button>



              {/* <Button className=" bg-cyan-800  mb-4" icon={<FaUpload  />}>
                  <span className="text-gray-100 font-roboto  ">
                    Click to Upload
                  </span>
                </Button> */}


              <p className="text-gray-700  font-medium text-center">
                Upload documents of up to 31 MB in PDF, DOC, DOCX, RTF, PPT, PPTX, JPEG, PNG, or TXT
              </p>
            </Upload.Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drag;

