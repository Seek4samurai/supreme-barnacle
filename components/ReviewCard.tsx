import Image from "next/image";
import React from "react";

const style = {
  // container stylings
  container: `mt-[4rem] border-4 border-[#fadf63] rounded-2xl w-1/4 h-[17rem] bg-[#010011]`,
  mainContainer: `flex flex-col text-white`,

  // arranging headers
  header: `flex flex-row p-5`,
  headerText: `flex flex-col pl-4`,
  headerCountry: `flex flex-row justify-start`,

  // text stylings
  name: `font-[serif] tracking-wider`,
  flag: ``,
  address: `text-[#fadf63]`,
  desc: `p-2 text-sm`,
};

const ReviewCard = (props: any) => {
  const { img, name, flag, country, desc } = props.reviews; // destructing things

  return (
    <>
      <div id="Container" className={style.container}>
        <div className={style.mainContainer}>
          <div className={style.header}>
            <div>
              <Image src={img} width={"45px"} height={"45px"}></Image>
            </div>
            <div className={style.headerText}>
              <div className={style.name}>{name}</div>
              <div className={style.headerCountry}>
                <div className={style.flag}>{flag}&nbsp;</div>
                <div className={style.address}>{country}</div>
              </div>
            </div>
          </div>
          <div className={style.desc}>{desc}</div>
        </div>
        {/* shadow effect over userprofile card */}
        <style jsx>{`
          #Container {
            box-shadow: rgba(58, 153, 255, 0.1) 5px 5px,
              rgba(58, 153, 255, 0.5) 10px 10px,
              rgba(58, 153, 255, 0.4) 15px 15px,
              rgba(58, 153, 255, 0.3) 20px 20px,
              rgba(58, 153, 255, 0.1) 25px 25px;
            border-radius: 1rem;
          }
          #Container:hover {
            box-shadow: rgba(58, 153, 255, 0.1) 15px 15px,
              rgba(58, 153, 255, 0.5) 15px 15px,
              rgba(58, 153, 255, 0.4) 31px 31px,
              rgba(58, 153, 255, 0.3) 23px 23px,
              rgba(58, 153, 255, 0.1) 51px 51px;
          }
        `}</style>
      </div>
    </>
  );
};

export default ReviewCard;
