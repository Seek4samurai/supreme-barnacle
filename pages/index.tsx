import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import ProgressCircles from "../components/ProgressCircles";
import { UserData } from "../data/userData";

const style = {
  // main content
  main: `h-[100vh]`,
  hero: `flex flex-col absolute top-[35%] left-[50%] -translate-x-[50%] text-white`,

  // first page content
  textContainer: `flex flex-col mb-[10rem]`,
  heroText: `text-[4.4rem] font-serif font-medium`,
  sidekick: `text-[1.5rem] font-light w-[60%]`,

  // second page content
  secondPageHeader: `flex flex-row justify-between items-center text-[#ffec23] pl-[8rem] pr-[8rem]`,
  secondPageHeaderTextDeco: `absolute pt-[0.5rem] underline text-[#0267ff]`,
  secondPageHeaderText: `text-3xl text-white font-[serif]`,
  secondPageContent: `flex flex-row justify-evenly `,
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
          {/* fixed box issue!!! */}
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
    </>
  );
};

export default Home;
