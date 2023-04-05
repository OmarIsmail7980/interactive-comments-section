import React, { useEffect, useState } from "react";
import data from "../data.json";

const TextInput = () => {
  const [text, setText] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    //remove the event listner
    return () => window.removeEventListener("resize", handleResize);
  });

  const colValue = screenWidth < 800 ? 35 : 60;
  return (
    <div
      className="absolute bottom-10 left-[50%] translate-x-[-50%] flex justify-center 
    bg-white rounded-lg py-5 px-5 "
    >
      <div className="relative lg:flex">
        <div className="rounded-full lg:mr-4 absolute lg:static left-0 bottom-0 h-1/3 lg:h-1/2">
          <img className="" src={`../images/icon-minus.svg`} alt="user" />
        </div>

        <textarea
          rows="3"
          cols={colValue}
          placeholder="Add a comment..."
          className="lg:mr-2 py-2 px-4 resize-none border border-[#eaecf1] 
          rounded-md mb-14 lg:mb-0"
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          className="bg-[#5457b6] text-white py-2 px-5 h-1/3 lg:h-1/2 
      rounded-md hover:bg-[#c3c4ef] absolute lg:static right-0 bottom-0"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default TextInput;
