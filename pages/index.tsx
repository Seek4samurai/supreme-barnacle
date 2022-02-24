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
  main: `h-[100vh] overflow-x-hidden select-none`,
  hero: `flex flex-col absolute top-[35%] left-[50%] -translate-x-[50%] text-white`,

  // first page content
  textContainer: `flex flex-col mb-[10rem]`,
  heroText: `text-[4.4rem] font-serif font-medium`,
  sidekick: `text-[1.5rem] font-light w-[60%]`,

  // second page content
  secondPageHeader: `flex flex-row justify-between items-center text-[#ffec23] mt-[8rem] pl-[8rem] pr-[8rem] select-none`,
  secondPageHeaderTextDeco: `absolute pt-[0.5rem] underline text-[#0267ff]`,
  secondPageHeaderText: `text-4xl text-white font-[serif]`,
  secondPageContent: `flex flex-row justify-evenly `,

  // third page content
  thirdPageHeader: `flex flex-row justify-between items-center mt-[8rem] pl-[8rem] pr-[8rem] select-none`,
  thirdPageRight: `flex flex-row items-center text-[#c1c1c1]`,
  activePage: `text-white`,
  arrow: `flex flex-row w-[8rem] justify-evenly text-2xl`, // arrow deco
  arrowIndie: `transition-all duration-1 hover:scale-[1.4] hover:text-white`, // arrow deco on individual for hovers

  // reviews here
  thirdPageHeaderTextDeco: `absolute pt-[0.5rem] underline text-[#0267ff]`,
  thirdPageHeaderText: `text-4xl text-white font-[serif]`,
  thirdPageContent: `flex flex-row justify-evenly `,

  // footer
  footer: `mt-[10rem] text-white flex justify-center pb-[2rem] select-none`,
  footerName: `text-[#fadf63] transition-all duration-1 hover:cursor-pointer hover:tracking-[0.2rem]`,
};

const Home: NextPage = () => {
  return (
    <>
      <main className={style.main}>
        <Navbar></Navbar>
        <div className={style.hero}>
          <div className={style.textContainer}>
            <h1 className={style.heroText}>Cari Cari</h1>
            <p className={style.sidekick}>
              Live from their sofa to yours. Get closer to your favorite
              artists, and never miss out.
            </p>
          </div>
          <ProgressCircles></ProgressCircles>
        </div>
      </main>

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
          <a href="https://www.github.com/seek4samurai" target={"_blank"}>
            <span className={style.footerName}>Gourav Singh Rawat</span>
          </a>
        </Link>
      </footer>
    </>
  );
};

export default Home;
