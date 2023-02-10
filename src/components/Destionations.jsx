import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import keyw from "../assets/keywest.jpg";
import maldiv from "../assets/maldives.jpg";
import maldiv2 from "../assets/maldives2.jpg";
const Destionations = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-16 px-8">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean 's Best Beaches</p>
      <div className="grid grid-rows-none  md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="h-full w-full object-cover col-span-2 md:col-span-3 row-span-2 " src={bora} alt="/" />
        <img className="h-full w-full object-cover" src={bora2} alt="/" />
        <img className="h-full w-full object-cover" src={keyw} alt="/" />
        <img className="h-full w-full object-cover" src={maldiv} alt="/" />
        <img className="h-full w-full object-cover" src={maldiv2} alt="/" />
      </div>
    </div>
  );
};

export default Destionations;
