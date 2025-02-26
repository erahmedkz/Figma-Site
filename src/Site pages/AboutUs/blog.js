import React from 'react';
import blogImage from '../../photo//blog.png'; 

function BlogSection() {
  return (
    <div className="blogContainer">
      <div className="blogImageSection">
        <img src={blogImage} alt="Blog Image" className="blogImage" />
        <div className="blogPurpleCircle"></div>
      </div>
      <div className="blogTextSection">
        <h2 className="blogTitle">Why we started this Blog</h2>
        <p className="blogDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p className="blogLongDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
    </div>
  );
}

export default BlogSection;