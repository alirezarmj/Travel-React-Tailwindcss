import video from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
      />
      <div className="absolute w-full bg-gray-900/30 text-white h-full top-0 left-0 ">
        <div className="absolute top-0 flex items-center flex-col justify-center w-full h-full p-4 ">
          <h1>First Class Travel</h1>
          <h2 className="py-4">Top 1% Locations Worldwide</h2>
          <form className="flex justify-between items-center border w-full max-w-[700px] mx-auto p-1 rounded-md bg-gray-100 text-black">
            <div>
              <input
                className="w-[300px] sm:w-[400px] bg-transparent focus:outline-none "
                type="text"
                placeholder="Search Destinations"
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
