import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[80px] z-10 absolute flex mx-auto justify-between items-center text-white ">
      <h1 className="p-4 md:p-0 ">BEACHES.</h1>
      <ul className=" gap-4 hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={30} />
        <AiOutlineUser size={30} />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden z-20 p-4 md:p-0" onClick={handleNav}>
        {nav ? <RxCross2 className="text-black" size={30} /> : <HiOutlineMenuAlt4 size={30} />}
      </div>

      {/* SideBar Menu */}
      <div className={nav ? "w-full z-10 text-black absolute md:hidden top-0 left-0 bg-gray-100 p-4 duration-300 ease-out":"absolute left-[-100%]"}>
        <ul className=" gap-4 ">
          <h1>BEACHES.</h1>
          <li className="py-2 px-4 border-b-2">Home</li>
          <li className="py-2 px-4 border-b-2">Destinations</li>
          <li className="py-2 px-4 border-b-2">Travel</li>
          <li className="py-2 px-4 border-b-2">Views</li>
          <li className="py-2 px-4 border-b-2">Book</li>
        </ul>
        <div className="flex flex-col py-4">
          <button className="font-bold text-lg my-4">Search</button>
          <button className="font-bold text-lg">Account</button>
        </div>
        <div className="flex justify-between py-4">
          <BsFacebook className="icon"/>
          <BsTwitter className="icon"/>
          <BsInstagram className="icon"/>
          <BsPinterest className="icon"/>
          <BsYoutube className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
