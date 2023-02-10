import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import keyw from "../assets/keywest.jpg";
import maldiv from "../assets/maldives.jpg";
import maldiv2 from "../assets/maldives2.jpg";
import maldiv3 from "../assets/maldives3.jpg";

const Selects = () => {
  return (
    <div className="max-w-[1240px] py-8 px-8 text-white font-bold ">
      <div className="grid sm:grid-cols-2  lg:grid-cols-3   gap-2 md:gap-4">
        <div className="relative">
          <img src={bora} alt="/" className="w-full object-cover h-full" />
          <p className="absolute bottom-2 left-2 text-3xl md:text-2xl">Bora Bora</p>
        </div>
        <div className="relative">
          <img src={bora2} alt="/" className="w-full object-cover h-full" />
          <p className="absolute bottom-2 left-2 text-3xl md:text-2xl">Cuzomel</p>
        </div>
        <div className="relative">
          <img src={keyw} alt="/" className="w-full object-cover h-full" />
          <p className="absolute bottom-2 left-2 text-3xl md:text-2xl">Maldives</p>
        </div>
        <div className="relative">
          <img src={maldiv} alt="/" className="w-full object-cover h-full" />
          <p className="absolute bottom-2 left-2 text-3xl md:text-2xl">Jamaica</p>
        </div>
        <div className="relative">
          <img src={maldiv2} alt="/" className="w-full object-cover h-full" />
          <p className="absolute bottom-2 left-2 text-3xl md:text-2xl">Key West</p>
        </div>
        <div className="relative">
          <img src={maldiv3} alt="/" className="w-full object-cover h-full" />
          <p className="absolute bottom-2 left-2 text-3xl md:text-2xl">Antigua</p>
        </div>
      </div>
    </div>
  );
};

export default Selects;
