import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Post.css";

const Post = () => {
  const [comments, setComments] = useState();

  return <div className="Post">Post Component</div>;
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  about: PropTypes.string,
};

Post.defaultProps = {
  title: "Lorem ipsum dolor sit amet, consectetur",
  author: "Lorem ipsum",
  about: "Lorem ipsum dolor sit",
};

export default Post;
