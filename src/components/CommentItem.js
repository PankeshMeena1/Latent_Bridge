import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <li className="comment-item">
      <p>
        <strong>{comment.email}</strong>
      </p>
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentItem;
