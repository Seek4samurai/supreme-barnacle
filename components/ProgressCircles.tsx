import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMailStarLine } from "react-icons/ri";
import { BiCalendarStar } from "react-icons/bi";
import { VscDebugRestartFrame } from "react-icons/vsc";

const style = {
  container: `flex flex-row text-white`,
  progressiveCircle: `flex flex-col items-center justify-center w-[200px] h-[200px] border-2 border-[#ff42a0] rounded-full transition-all duration-1 hover:scale-[1.1] blur-[2px] hover:blur-none`,
  circle: `flex flex-col items-center justify-center w-[200px] h-[200px] border-2 rounded-full ml-[8rem] transition-all duration-1 hover:scale-[1.1] blur-[2px] hover:blur-none`,

  heartIcon: `text-[2.4rem] text-[#0267ff]`,
  icon: `text-[2.4rem] `,
  circleCount: `text-[2.6rem] font-[Vogue]`,
  circleText: `font-[2]`,
};

const ProgressCircles = () => {
  return (
    <>
      <div className={style.container}>
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
    </>
  );
};

export default ProgressCircles;
