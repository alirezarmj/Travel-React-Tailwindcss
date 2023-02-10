import { RiCustomerService2Line } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] py-16 px-8 mx-auto ">
      <div className="grid md:grid-cols-3 gap-2 md:gap-4 items-center ">
        <div className="md:col-span-2">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            blanditiis assumenda totam, temporibus autem amet porro repudiandae
            cumque ipsa natus praesentium recusandae corrupti corporis iure
            earum voluptatibus officia vero pariatur a, quos accusantium
            molestiae debitis architecto quae! Nobis, incidunt amet dignissimos
            voluptas nostrum illum impedit ullam distinctio ab ut aliquam ex
            ipsa quisquam voluptatum optio officiis vel atque asperiores
            repellendus molestiae iste quaerat velit accusamus provident! Modi,
            doloribus rerum repellat, blanditiis explicabo eligendi repudiandae
            voluptas fuga ex itaque beatae cumque in voluptates iure, atque et
            accusantium praesentium odio eius cupiditate sint.
          </p>
          <div className="grid sm:grid-cols-2 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center py-4">
              <button>
                <RiCustomerService2Line size={50} />
              </button>
              <div className=" text-center">
                <h3 className="font-bold">LEADING SERVICE</h3>
                <p className="py-2 px-4">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4">
              <button>
                <MdTravelExplore size={50} />
              </button>
              <div className=" text-center">
                <h3 className="font-bold">AUTOMATED BOOKINGS </h3>
                <p className="py-2 px-4">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col mx-auto ">
          <div className="border p-4 text-center">
            <h4>GET AN ADDITIONAL 10% OFF</h4>
            <h3 className="py-4">12 HOURS LEFT</h3>
            <h3 className="text-white bg-gray-900 ">BOOK NOW AND SAFE</h3>
          </div>
          <form className="w-full py-2">
            <div className="flex flex-col py-2">
              <label>Destination</label>
              <select className="border border-l-sky-300 p-1 rounded-lg">
                <option>Grande Antigua</option>
                <option>Key West</option>
                <option>Bora Bora</option>
                <option>Maldives</option>
                <option>Cozumel</option>
              </select>
            </div>
            <div className="flex flex-col py-2">
              <label>Check-In</label>
              <input className="border border-zinc-300 p-1 rounded-lg"  type="date" />
            </div>
            <div className="flex flex-col py-2">
              <label>Check-Out</label>
              <input className="border border-zinc-300 p-1 rounded-lg" type="date" />
            </div>
            <button className="w-full">Rates & Availabilites</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
