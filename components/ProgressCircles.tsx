import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMailStarLine } from "react-icons/ri";
import { BiCalendarStar } from "react-icons/bi";
import { VscDebugRestartFrame } from "react-icons/vsc";

const style = {
  container: `flex flex-row justify-around lg:flex-nowrap flex-wrap text-white`,
  progressiveCircle: `flex flex-col items-center justify-center lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] w-[90px] h-[90px] border-2 border-[#ff42a0] rounded-full transition-all duration-1 hover:scale-[1.1] blur-[2px] hover:blur-none`,
  circle: `flex flex-col items-center justify-center lg:ml-[2rem] lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] w-[90px] h-[90px] border-2 rounded-full transition-all duration-1 hover:scale-[1.1] blur-[2px] hover:blur-none`,

  heartIcon: `lg:text-[2.4rem] text-[1rem] text-[#0267ff]`,
  icon: `lg:text-[2.4rem]`,
  circleCount: `lg:text-[2.6rem] font-[Vogue]`,
  circleText: `font-[2] lg:text-[1rem] text-[0.7rem]`,
};

const ProgressCircles = () => {
  return (
    <>
      <div id="container" className={style.container}>
        <div className={style.progressiveCircle}>
          <div className={style.heartIcon}>
            <AiOutlineHeart></AiOutlineHeart>
          </div>
          <div className={style.circleCount}>0</div>
          <div className={style.circleText}>Label</div>
        </div>
        <div className={style.circle}>
          <div className={style.icon}>
            <RiMailStarLine></RiMailStarLine>
          </div>
          <div className={style.circleCount}>0</div>
          <div className={style.circleText}>Label</div>
        </div>
        <div className={style.circle}>
          <div className={style.icon}>
            <BiCalendarStar></BiCalendarStar>
          </div>
          <div className={style.circleCount}>0</div>
          <div className={style.circleText}>Label</div>
        </div>
        <div className={style.circle}>
          <div className={style.icon}>
            <VscDebugRestartFrame></VscDebugRestartFrame>
          </div>
          <div className={style.circleCount}>0</div>
          <div className={style.circleText}>Label</div>
        </div>
      </div>
      <style jsx>{`
        #container {
        }
      `}</style>
    </>
  );
};

export default ProgressCircles;
