import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const CreativeWorkShop = () => {
    return (
        <div className='bg-green-700 min-h-screen flex flex-col items-center justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-gray-100 items-center space-y-4 lg:space-y-0 lg:space-x-16 justify-center p-4">
    <h1 className="text-3xl md:text-4xl lg:text-6xl mx-auto font-semibold m-4 lg:m-10">
        Collaborative spreadsheets for creative workplaces
    </h1>

    <div className="space-y-4 text-base px-4 lg:px-0">
        <p className='text-lg'>
            Create spreadsheets your teams can easily collaborate on for free. Powered by an automated data processor, an AI-assisted data analyst, and 1,000+ integration possibilities, Likho Sheet makes data handling easier and more effective.
        </p>
        <Link to='/features'>
            <button className="text-lg font-poppins mt-4 px-4 bg-purple-700 hover:bg-purple-800 text-center text-white p-2 rounded-lg">
                Access Likho
            </button>
        </Link>
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
