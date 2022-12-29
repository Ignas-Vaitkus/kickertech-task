import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import "./Post.css";

const Post = ({ title, author, about }) => {
  const comments = [
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "Lorem ipsum",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  return (
    <section className="Post">
      <div class="post-container">
        <div className="photo-container"></div>
        <div className="text-container">
          <h4>{title}</h4>
          <h6>{author}</h6>
          <p>{about}</p>
        </div>
      </div>
      <div className="comment-container">
        <form
          onSubmit={(e) => e.preventDefault()}
          method="POST"
          class="input-container"
        >
          <input placeholder="Placeholder..." />
          <button type="submit">SUBMIT</button>
        </form>
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
    </section>
  );
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
