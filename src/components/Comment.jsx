import React from 'react'
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader'
import LikeCounter from './LikeCounter'

const Comment = () => {
  return (
    <div className="bg-white flex justify-center p-4 rounded-md ">
      <LikeCounter />
      <div className="flex flex-col ml-4">
        <CommentHeader />
      </div>
      <CommentBody/>
    </div>
  );
}

export default Comment
