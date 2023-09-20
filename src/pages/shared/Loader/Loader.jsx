import { PropagateLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center'>

            <PropagateLoader color="hsla(279, 73%, 36%, 1)" />
        </div>
    );
};

export default Loader;