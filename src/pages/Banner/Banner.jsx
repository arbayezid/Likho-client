import { Link } from "react-router-dom";
import Container from "../shared/Container";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 p-4">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 font-poppins items-center justify-center lg:space-x-20 pt-10 mx-auto gap-4">

          {/* left front side */}
          <div className="text-center lg:text-left space-y-5">
            <h2 className="text-2xl lg:text-4xl font-poppins text-white font-semibold mb-4 lg:mb-0">
              Unlock limitless customization <br /> with Likho{" "}
              <span className="text-lime-400">Editor</span>, the future <br /> of WYSIWYG available <br /> today
            </h2>
            <p className="text-white">
              Meet Likho Editor – a contemporary, feature-rich text editor, renowned <br /> for its clean UI and impeccable UX. Its versatility shines through <br /> effortless customization, making it the perfect solution for any <br /> use case
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <Link to="/features">
                <button className="text-lg font-poppins px-4 bg-lime-400 hover:bg-lime-500 text-center text-black p-2 rounded-lg">
                  Take Explore
                </button>
              </Link>
              <button className="text-lg font-poppins px-4 hover:bg-blue-100 text-center text-blue-950 bg-blue-200 font-semibold border border-gray-500 p-2 rounded-lg">
                Docs Know
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="text-center">
            <img className="h-auto max-w-full lg:max-h-full" src="https://i.ibb.co/t4Skz1t/image.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
