import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import ProgressCircles from "../components/ProgressCircles";

const style = {
  // main content
  hero: `flex flex-col absolute top-[35%] left-[50%] -translate-x-[50%] text-white`,

  // first page content
  textContainer: `flex flex-col mb-[10rem]`,
  heroText: `text-[4.4rem] font-serif font-medium`,
  sidekick: `text-[1.5rem] font-light w-[60%]`,

  // second page content
  secondPage: ``,
};

const Home: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={style.hero}>
        <div className={style.textContainer}>
          <h1 className={style.heroText}>Cari Cari</h1>
          <p className={style.sidekick}>
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
        <ProgressCircles></ProgressCircles>
      </div>
      <section className={style.secondPage}></section>
    </>
  );
};

export default Home;
