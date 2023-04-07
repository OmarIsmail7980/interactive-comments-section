import React from 'react'
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader'
import LikeCounter from './LikeCounter'

const Comment = () => {
  return (
    <div className="bg-white flex p-4 rounded-md w-[35%] relative">
      <LikeCounter />
      <div className="flex flex-col ml-4">
        <CommentHeader />
        <CommentBody />
      </div>
    </div>
  );
}

export default Comment
