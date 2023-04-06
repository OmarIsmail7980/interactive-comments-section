import React, { useState } from "react";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div className="bg-[#eaecf1] flex flex-col px-2 max-px-2 py-2.5 max-py-2.5 justify-center rounded-md">
      <div
        className="cursor-pointer mb-1.5 flex justify-center"
        onClick={() => {
          setLikes((prevValue) => prevValue + 1);
        }}
      >
        <img src={plus} alt="plus" className="p-1" />
      </div>

      <div className="text-lg text-[#5457b6] text-center font-semibold mb-2 ">
        <span className="px-1">{likes}</span>
      </div>

      <div
        className="cursor-pointer flex justify-center"
        onClick={() => {
          if (likes > 0) {
            setLikes((prevValue) => prevValue - 1);
          }
        }}
      >
        <img src={minus} alt="plus" />
      </div>
    </div>
  );
};

export default LikeCounter;
