import React from "react";

const Card = (propse) => {
  return (
    <div>
      <img src={propse.img} alt="" />
      <div className="pt-5 p-3 shadow-2xl dark:bg-[#363636]   rounded-md ">
        <p className=" text-4xl">{propse.text}</p>
        <p className="w-[350px] pt-5 text-[#666666]">{propse.text2}</p>
        <p className="pt-4 pb-4">{propse.text3}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <img src={propse.img2} alt="" />
            <p>{propse.text4}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={propse.img3} alt="" />
            <p>{propse.text5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
