import type { NextPage } from "next";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import ProgressCircles from "../components/ProgressCircles";
import ReviewCard from "../components/ReviewCard";
import { reviewData } from "../data/reviewData";
import { UserData } from "../data/userData";

const style = {
  // main content
  main: `h-[70vh] overflow-x-hidden select-none`,

  // Background Image here
  imgContainer: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url(../public/images/MainBG.png)] before:bg-cover before:bg-center`,
  imgGradient: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-t before:from-[#01001e] before:to-none`,

  hero: `lg:translate-y-[60%] translate-y-[40%] flex flex-col items-center text-white`,
  // absolute top-[35%] left-[50%] -translate-x-[50%] // Old config

  // first page content
  textContainer: `flex flex-col z-10 mb-[10rem] w-[80vw]`,
  heroText: `md:text-[4.4rem] text-[3.5rem] font-serif font-medium`,
  sidekick: `md:text-[1.5rem] text-[1rem] font-light w-[60%]`,

  // second page content
  secondPageHeader: `flex flex-row justify-between items-center text-[#ffec23] mt-[8rem] pl-[8rem] pr-[8rem] select-none`,
  secondPageHeaderTextDeco: `absolute pt-[0.5rem] underline text-[#0267ff]`,
  secondPageHeaderText: `z-[20] sm:text-4xl text-2xl text-white font-[serif]`,
  secondPageContent: `flex flex-row pb-[3rem] overflow-x-scroll 2xl:overflow-x-clip`,

  // third page content
  thirdPageHeader: `flex flex-row justify-between items-center mt-[8rem] pl-[8rem] pr-[8rem] select-none`,
  thirdPageRight: `flex flex-row items-center text-[#c1c1c1]`,
  activePage: `text-white`,
  arrow: `flex flex-row justify-evenly text-2xl`, // arrow deco
  arrowIndie: `transition-all pl-[1rem] duration-1 hover:scale-[1.4] hover:text-white`, // arrow deco on individual for hovers

  // reviews here
  thirdPageHeaderTextDeco: `absolute pt-[0.5rem] underline text-[#0267ff]`,
  thirdPageHeaderText: `sm:text-4xl text-2xl text-white font-[serif]`,
  thirdPageContent: `flex flex-row justify-none 2xl:justify-center pb-[3rem] overflow-x-scroll 2xl:overflow-x-auto `,

  // footer
  footer: `mt-[10rem] text-white flex justify-center pb-[2rem] select-none`,
  footerName: `text-[#fadf63] transition-all duration-1 hover:cursor-pointer hover:tracking-[0.2rem]`,
};

const Home: NextPage = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.imgContainer}>
          <div className={style.imgGradient}></div>
        </div>
        <Navbar></Navbar>
        <div className={style.hero}>
          <div className={style.textContainer}>
            <h1 className={style.heroText}>Cari Cari</h1>
            <p className={style.sidekick}>
              Live from their sofa to yours. Get closer to your favorite
              artists, and never miss out.
            </p>
          </div>
        </div>
      </main>
      <ProgressCircles></ProgressCircles>

      <section>
        <div className={style.secondPageHeader}>
          <h1 className={style.secondPageHeaderText}>
            <span className={style.secondPageHeaderTextDeco}>
              {/* for whitespaces */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Upcoming Shows
          </h1>
          <p>View All</p>
        </div>
        <div className={style.secondPageContent}>
          {/* fetching data and looping over it */}
          {UserData.map((users) => {
            return (
              <ProfileCard
                key={users.id}
                users={users}
                name={users.name}
                type={users.type}
                img={users.img}
              ></ProfileCard>
            );
          })}
        </div>
      </section>
      <section>
        <div className={style.thirdPageHeader}>
          <h1 className={style.thirdPageHeaderText}>
            <span className={style.thirdPageHeaderTextDeco}>
              {/* for whitespaces */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Reviews
          </h1>
          <p className={style.thirdPageRight}>
            <span className={style.activePage}>1</span>/12
            <span className={style.arrow}>
              <span className={style.arrowIndie}>
                <BsArrowLeft></BsArrowLeft>
              </span>
              <span className={style.arrowIndie}>
                <BsArrowRight></BsArrowRight>
              </span>
            </span>
          </p>
        </div>
        <div className={style.thirdPageContent}>
          {/* fetching data and looping over it */}
          {reviewData.map((reviews) => {
            return (
              <ReviewCard
                key={reviews.id}
                reviews={reviews}
                img={reviews.img}
                name={reviews.name}
                flag={reviews.flag}
                country={reviews.country}
                desc={reviews.desc}
              ></ReviewCard>
            );
          })}
        </div>
      </section>
      <footer className={style.footer}>
        Made by&nbsp;
        <Link href={"https://www.github.com/seek4samurai"}>
          <a href="https://www.github.com/seek4samurai">
            <span className={style.footerName}>Gourav Singh Rawat</span>
          </a>
        </Link>
      </footer>
    </>
  );
};

export default Home;
