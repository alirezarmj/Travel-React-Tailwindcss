import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="w-full h-fit bg-gray-300">
      <div className="max-w-[1240px] mx-auto px-4 py-16 flex justify-between items-center">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h2 className="text-center">BEACHES.</h2>
            <div className="flex justify-between py-4 px-8 md:gap-8">
              <BsFacebook className="icon" />
              <BsTwitter className="icon" />
              <BsInstagram className="icon" />
              <BsPinterest className="icon" />
              <BsYoutube className="icon" />
            </div>
          </div>
          <div className="flex justify-between ">
            <ul className="flex flex-col md:flex-row md:gap-4">
              <li className="py-2 text-center">About</li>
              <li className="py-2 text-center">Partnerships</li>
              <li className="py-2 text-center">Careers</li>
              <li className="py-2 text-center">Newsroom</li>
              <li className="py-2 text-center">Advertising</li>
            </ul>
            <ul className="flex flex-col md:flex-row md:gap-4 ">
              <li className="py-2 text-center">Home</li>
              <li className="py-2 text-center">Destinations</li>
              <li className="py-2 text-center">Travel</li>
              <li className="py-2 text-center">Views</li>
              <li className="py-2 text-center">Book</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
