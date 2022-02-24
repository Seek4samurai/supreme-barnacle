import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";

const style = {
  mainContainer: `mt-[4rem] ml-[2rem] mr-[4rem] transition-all duration-1 select-none`,
  container: `flex flex-col w-[360px] h-[500px] bg-[#080c5b] rounded-xl overflow-hidden`,

  textArea: `p-[1rem]`, // text fields inside user profile cards

  tagText: `bg-yellow-500 p-[0.3rem] rounded`,
  userName: `text-white text-[2rem] font-serif`,

  info: `flex flex-row justify-between pt-[2rem]`,
  moreInfo: `font-bold text-[#3a99ff] flex flex-row items-center group`,
  arrow: `group-hover:pl-[1rem] transition-all duration-2`,
  icon: `text-white text-3xl hover:scale-[1.3] hover:animate-pulse transition-all duration-1`,
};

const ProfileCard = (props: any) => {
  const { name, type, img } = props.users; // destructing things
  return (
    <>
      <div id="mainContainer" className={style.mainContainer}>
        <div className={style.container}>
          {/* hard coded values here */}
          <Image
            src={img}
            alt={"ProfilePic"}
            width={"400px"}
            height={"380px"}
          ></Image>
          <div className={style.textArea}>
            <div>
              <span className={style.tagText}>{type}</span>
            </div>
            <div className={style.userName}>{name}</div>
            <div className={style.info}>
              <p className={style.moreInfo}>
                More Info
                <span className={style.arrow}>
                  <BsArrowRight></BsArrowRight>
                </span>
              </p>
              <div className={style.icon}>
                <RiFileList3Line></RiFileList3Line>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* shadow effect over userprofile card */}
      <style jsx>{`
        #mainContainer {
          box-shadow: rgba(58, 153, 255, 0.1) 5px 5px,
            rgba(58, 153, 255, 0.5) 10px 10px, rgba(58, 153, 255, 0.4) 15px 15px,
            rgba(58, 153, 255, 0.3) 20px 20px, rgba(58, 153, 255, 0.1) 25px 25px;
          border-radius: 1rem;
        }
        #mainContainer:hover {
          box-shadow: rgba(58, 153, 255, 0.1) 15px 15px,
            rgba(58, 153, 255, 0.5) 15px 15px, rgba(58, 153, 255, 0.4) 31px 31px,
            rgba(58, 153, 255, 0.3) 23px 23px, rgba(58, 153, 255, 0.1) 51px 51px;
        }
      `}</style>
    </>
  );
};

export default ProfileCard;
