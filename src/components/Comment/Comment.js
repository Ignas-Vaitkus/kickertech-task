import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = ({ username, comment }) => (
  <div className="Comment">
    <div className="comment-user-picture-container"></div>
    <div class="comment-content">
      <div className="comment-username">{username}</div>
      <div className="comment-text">{comment}</div>
    </div>
  </div>
);

Comment.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
};

Comment.defaultProps = {
  username: "Lorem ipsum",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
};

export default Comment;
