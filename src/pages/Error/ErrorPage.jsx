import Lottie from 'react-lottie';
import errorLottie from '../../../public/errorlotie.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={400} width={400} />
            <div className='text-center'>
                <Link to={-1}>
                    <button className="bg-gradient-to-r mt-10 from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full shadow-md font-semibold transform hover:scale-110 transition duration-300 ease-in-out">
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;