import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
