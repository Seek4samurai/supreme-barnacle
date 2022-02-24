import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import HomeJam from "../public/images/HomeJam Logo.svg";

const style = {
  container: `relative text-white text-[1.1rem] select-none`,

  // Navbar here
  navbar: `w-[100vw] h-[3rem] flex flex-row items-center pl-[8rem] pr-[8rem]`,
  navText: `flex flex-row w-[100%] justify-end md:visible`,

  // Hamburger here
  hamburger: `transition-all duration-1 animate-pulse text-[1.7rem] md:hidden overflow-x-hidden select-none`,
  HamLiItem: `transition-all duration-1 text-white text-[2rem] p-[1rem] font-[serif] hover:tracking-[0.6rem]`,
};

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  if (hamburgerOpen === true) {
    console.log("Open");
    const closeHam = () => {
      setHamburgerOpen(!hamburgerOpen);
    };
    return (
      <>
        <div className="absolute left-[50%] -translate-x-[50%] -translate-y-[4%] w-[80vw] h-[40vh] bg-[#1e1e1e]/75 backdrop-blur-sm rounded-2xl z-50">
          <ul className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] animate-pulse flex flex-col items-center">
            <li className={style.HamLiItem}>Search</li>
            <li className={style.HamLiItem}>Help</li>
            <li className={style.HamLiItem}>Account</li>
            <li className={style.HamLiItem} onClick={closeHam}>
              Close
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    console.log("close");
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <div>
            <Image src={HomeJam} alt="LogoHere"></Image>
          </div>
          <ul className={style.navText}>
            <li className={style.hamburger} onClick={toggleHamburger}>
              <GiHamburger></GiHamburger>
            </li>
            <li className="flex-row items-center hidden md:flex">
              <AiOutlineSearch></AiOutlineSearch>Search
            </li>
            <li className="pl-[5rem] hidden md:flex">Help</li>
            <li className="pl-[5rem] hidden md:flex">Account</li>
            <li className="items-center pl-[5rem] hidden md:flex">
              <BiWalletAlt></BiWalletAlt>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
