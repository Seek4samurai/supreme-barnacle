import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import HomeJam from "../public/images/HomeJam Logo.svg";

const style = {
  imgContainer: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url(../public/images/MainBG.png)] before:bg-cover before:bg-center`,
  imgGradient: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-t before:from-[#01001e] before:to-none`,

  container: `relative text-white text-[1.1rem] select-none`,
  navbar: `w-[100vw] h-[3rem] flex flex-row items-center pl-[8rem] pr-[8rem]`,
  navText: `flex flex-row w-[100%] justify-end`,
};

const navbar = () => {
  return (
    <>
      <div className={style.imgContainer}>
        <div className={style.imgGradient}>
          <div className={style.container}>
            <div className={style.navbar}>
              <div>
                <Image src={HomeJam} alt="LogoHere"></Image>
              </div>
              <ul className={style.navText}>
                <li className="flex flex-row items-center">
                  <AiOutlineSearch></AiOutlineSearch>Search
                </li>
                <li className="pl-[5rem]">Help</li>
                <li className="pl-[5rem]">Account</li>
                <li className="flex items-center pl-[5rem]">
                  <BiWalletAlt></BiWalletAlt>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
