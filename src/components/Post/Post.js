import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Post.css";

const Post = () => {
  const [comments, setComments] = useState();

  return <div className="Post">Post Component</div>;
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
