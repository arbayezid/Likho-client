import ReactPlayer from 'react-player';

const CreativeWorkShop = () => {
    return (
        <div className='bg-green-700 min-h-screen flex flex-col items-center justify-center'>
            <div className="grid grid-cols-2 text-gray-100 items-center space-x-44 justify-center">
                <h1 className="text-6xl mx-auto font-semibold m-10  ">Collaborative <br /> spreadsheets for <br /> creative workplaces</h1>

                <div className="space-y-4 text-base ps-10">
                    <p className='text-lg'>
                        Create spreadsheets your teams can easily collaborate <br /> on for free. Powered by an automated data processor, <br /> an AI-assisted data analyst, and 1,000+ integration <br /> possibilities, Likho Sheet makes data handling easier <br /> and more effective.</p>
                        <button className="border-1 shadow-md border-blue-900 hover:border-blue-700 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg p-2 px-4 text-2xl hover:animate-pulse font-semibold text-gray-200 transition-opacity duration-5000">Access Likho</button>

                </div>




            </div>
            <section className="py-10 ">
                <div className="container justify-center items-center mx-auto">
                   
                    <div className="relative flex justify-center items-center">
                        <style>
                            {`
                                .react-player {
                                    .video-react-control-bar {
                                        display: none !important; // Hide the entire control bar
                                    }
                                    .video-react-play-progress {
                                        display: none !important; // Hide the timing line
                                    }
                                }
                            `}
                        </style>
                        <ReactPlayer
                            url="/public/home-banner.mp4"
                            controls={true} // Use controls for auto play and custom play button
                            playing
                            width="70%"
                            height="100%"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeWorkShop;
