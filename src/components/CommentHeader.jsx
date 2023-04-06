import React from "react";
import deleteIcon from "../images/icon-delete.svg";
import user from "../images/avatars/image-juliusomo.png";

const CommentHeader = () => {
  const name = "Juliosomo";
  const datePosted = "2 days ago";
  const postOwner = true;

  return (
    <div className="flex gap-2 mb-4">
      <div className="p-2 w-[50px]">
        <img src={user} alt="user" className="cover" />
      </div>

      <div className="p-2 flex gap-2 items-center">
        <p className="font-semibold">{name}</p>
        {postOwner && (
          <span className="bg-[#5457b6] text-white px-2 pb-1 text-sm ">
            you
          </span>
        )}
      </div>

      <div className="p-2 text-[#67727e] flex items-center">{datePosted}</div>

      <div className="p-2 ml-24 flex items-center">
        {postOwner ? (
          <div className="flex">
            <div
              className="text-[#ed6468] font-semibold hover:text-[#ffb8bb] 
            cursor-pointer flex items-center px-2"
            >
              <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                  fill="#ED6368"
                  onMouseOver={(e) =>
                    (e.currentTarget.childNodes[0].childNodes[0].style.fill =
                      "#ffb8bb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.childNodes[0].childNodes[0].style.fill =
                      "#ed6468")
                  }
                />
              </svg>
              <span className="pl-2">Delete</span>
            </div>
            <span
              className="text-[#5457b6] font-semibold hover:text-[#c3c4ef] 
            cursor-pointer px-2"
            >
              <span className="pl-2">Edit</span>
            </span>
          </div>
        ) : (
          <div className="">
            <span className="text-[#5457b6] font-semibold hover:text-[#c3c4ef] cursor-pointer">
              <span className="pl-2">Reply</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentHeader;
