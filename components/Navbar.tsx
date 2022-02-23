import Image from "next/image";
import React from "react";
import { BiWalletAlt } from "react-icons/bi";
import HomeJam from "../public/images/HomeJam Logo.svg";

const style = {
  imgContainer: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url(../public/images/MainBG.png)] before:bg-cover before:bg-center`,

  container: `relative text-white`,
  navbar: `w-[100vw] h-[3rem] flex flex-row items-center pl-[4rem] pr-[4rem]`,
  navLogo: ``,
  navText: `flex flex-row w-[100%] justify-end`,
};

const navbar = () => {
  return (
    <>
      <div className={style.imgContainer}>
        <div className={style.container}>
          <div className={style.navbar}>
            <div>
              <Image src={HomeJam} alt="LogoHere"></Image>
            </div>
            <ul className={style.navText}>
              <li>Search</li>
              <li>Help</li>
              <li>Account</li>
              <li>
                <BiWalletAlt></BiWalletAlt>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
